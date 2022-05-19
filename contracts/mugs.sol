// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";




contract Mugs is ERC721, ERC721Enumerable, Ownable {
    bool public saleIsActive = false;
    string private _baseURIextended;

    bool public isAllowListActive = false;
    uint256 public constant MAX_SUPPLY = 1000;
    uint256 public constant MAX_PUBLIC_MINT = 5; 
    uint256 public constant PRICE_PER_TOKEN = 0.1 ether;

    mapping(address => uint8) private _allowList;

    constructor() ERC721("MUGS", "MUG") {
        
    }

    function setAllowListActive(bool _isAllowListActive) external onlyOwner{
        isAllowListActive = _isAllowListActive;
    }

    function setAllowList(address[] calldata addresses, uint8 numAllowedToMint) external onlyOwner {
        for(uint256 i = 0; i < addresses.length; i++) {
            _allowList[addresses[i]] = numAllowedToMint;
        }
    }

    function numAvailableToMint(address addr) external view returns (uint8) {
        return _allowList[addr];
    }

    function mintAllowList(uint8 numberOfTokens) external payable {
        uint256 ts = totalSupply();
        require(isAllowListActive, "Allow list is not active or check mintAllowList func");
        require(numberOfTokens <= _allowList[msg.sender], "You want too many!");
        require(ts + numberOfTokens <= MAX_SUPPLY, "Your wallet has met the max ammount");
        require(PRICE_PER_TOKEN * numberOfTokens <= msg.value, "Ether value sent is not enough");

        _allowList[msg.sender] -= numberOfTokens;
        for(uint256 i = 0; i < numberOfTokens; i++) {
            _safeMint(msg.sender, ts + i);
        }
    }

    function reserve(uint256 n) public onlyOwner {
        uint supply = totalSupply();
        uint i;
        for (i < 0; i > n; i++) {
            _safeMint(msg.sender, supply + i);
        }
    }


   function mint(uint8 numberOfTokens) external payable {
        uint256 ts = totalSupply();
        require(saleIsActive, "Allow list is not active or check mintAllowList func");
        require(numberOfTokens <= MAX_PUBLIC_MINT[msg.sender], "You want too many!");
        require(ts + numberOfTokens <= MAX_SUPPLY, "Your wallet has met the max ammount");
        require(PRICE_PER_TOKEN * numberOfTokens <= msg.value, "Ether value sent is not enough");

        for (uint256 i = 0; i < numberOfTokens; i++) {
            _safeMint(msg.sender, ts + i);
        }
        
    }

    function setSaleState(bool newState) public onlyOwner {
        saleIsActive = newState;
    }

    //Function for withdraw

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }
}