// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract ChainStreamContract {
    struct User {
        bool isSeller;
        bool isCustomer;
        string name;
    }

    struct Product {
        int id;
        string ipfsHash;
        string description;
        address owner;
        string demoLink;
        uint256 price;
        uint256 salesAmount;
        address customer;
    }

    struct Sell {
        int256 productId;
        address customer;
    }

    struct Comment {
        address user;
        int256 productId;
        string text;
        string reply;
    }

    mapping(address => User) public users;
    mapping(int256 => Product) public products;

    address[] public userList;
    int256 public productIdCounter;
    uint256 public customerCount;
    uint256 public SellerCount;
    Sell[] public sells;
    Comment[] public comments;

    constructor() {
        productIdCounter = 0;
    }

    function createUser(
        string memory name,
        bool _isSeller,
        bool _isCustomer
    ) public {
        require(
            !users[msg.sender].isSeller && !users[msg.sender].isCustomer,
            "User already exists"
        );
        users[msg.sender] = User(_isSeller, _isCustomer, name);
        userList.push(msg.sender);
    }

    function createProduct(
        string memory name,
        string memory ipfsHash,
        string memory description,
        string memory demoLink,
        uint256 price,
        uint256 salesAmount
    ) public {
        require(users[msg.sender].isSeller, "only Seller can create property");
        products[productIdCounter] = Product(
            productIdCounter,
            ipfsHash,
            description,
            msg.sender,
            demoLink,
            price,
            salesAmount,
            address(0)
        );
        productIdCounter++;
    }

    function createSelling(int256 productId, address customer) public {
        require(
            users[customer].isCustomer &&
                products[productId].owner == msg.sender,
            "Invalid customer or product"
        );
        require(products[productId].salesAmount > 0, "Product is not sellable");

        sells.push(Sell(productId, customer));
        products[productId].salesAmount--;
    }

    function sendEth(uint256 amount, address payable receiver) public payable{
        receiver.transfer(amount);
    }

    function selledProducts() public view returns (address[] memory) {
        address[] memory selledProductsList = new address[](sells.length);
        for (uint256 i = 0; i < sells.length; i++) {
            selledProductsList[i] = products[sells[i].productId].owner;
        }
        return selledProductsList;
    }

    function makeComment(int256 productId, string memory text) public {
        require(
            users[msg.sender].isCustomer,
            "only customers can make a comment"
        );
        require(
            products[productId].customer == msg.sender,
            "users can only comment about their own bought product"
        );
        comments.push(Comment(msg.sender, productId, text, ""));
    }

    function replyTheComment(uint256 commentIndex, string memory reply)
        public
    {
        require(
            users[msg.sender].isSeller,
            "only sellers can reply to comments"
        );
        require(commentIndex < comments.length, "Invalid comment index");
        Comment storage comment = comments[commentIndex];
        require(
            products[comment.productId].owner == msg.sender,
            "You are not the owner of the product related to this comment"
        );
        comment.reply = reply;
    }

    function getCustomerComments()
        public
        view
        returns (
            int256[] memory,
            string[] memory,
            string[] memory,
            string[] memory
        )
    {
        int256[] memory productIds = new int256[](comments.length);
        string[] memory texts = new string[](comments.length);
        string[] memory replies = new string[](comments.length);
        string[] memory replyOfOwners = new string[](comments.length);

        for (uint256 i = 0; i < comments.length; i++) {
            Comment memory comment = comments[i];
            if (comment.user == msg.sender) {
                productIds[i] = comment.productId;
                texts[i] = comment.text;
                replies[i] = comment.reply;
                replyOfOwners[i] = products[comment.productId].owner ==
                    address(0)
                    ? ""
                    : users[products[comment.productId].owner].name;
            }
        }

        return (productIds, texts, replies, replyOfOwners);
    }

    function getSellerComments()
        public
        view
        returns (
            int256[] memory,
            string[] memory,
            string[] memory
        )
    {
        int256[] memory productIds = new int256[](comments.length);
        string[] memory texts = new string[](comments.length);
        string[] memory replies = new string[](comments.length);

        for (uint256 i = 0; i < comments.length; i++) {
            Comment memory comment = comments[i];
            if (products[comment.productId].owner == msg.sender) {
                productIds[i] = comment.productId;
                texts[i] = comment.text;
                replies[i] = comment.reply;
            }
        }

        return (productIds, texts, replies);
    }

    function getProducts(int256 id)
        public
        view
        returns (
            int256[] memory,
            string[] memory,
            address[] memory,
            string[] memory,
            uint256[] memory,
            uint256[] memory
        )
    {
        int256[] memory productIds = new int256[](1);
        string[] memory productDescriptions = new string[](1);
        address[] memory productOwners = new address[](1);
        string[] memory productIPFSHash = new string[](1);
        uint256[] memory productPrice = new uint256[](1);
        uint256[] memory productSalesAmount = new uint256[](1);

        Product memory product = products[id];

        productIds[0] = product.id;
        productDescriptions[0] = product.description;
        productOwners[0] = product.owner;
        productIPFSHash[0] = product.ipfsHash;
        productPrice[0] = product.price;
        productSalesAmount[0] = product.salesAmount;

        return (
            productIds,
            productDescriptions,
            productOwners,
            productIPFSHash,
            productPrice,
            productSalesAmount
        );
    }
}
