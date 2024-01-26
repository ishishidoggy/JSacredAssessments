/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTs = []; 

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, color) {
    let NFT = {
        name: name,
        description: description,
        color: color
    };
    NFTs.push(NFT);
    console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\nName: \t\t" + NFTs[i].name);
        console.log("Description: " + NFTs[i].description);
        console.log("Color: \t \t" + NFTs[i].color);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return NFTs.length; // Return the number of NFTs created

}

// call your functions below this line
mintNFT("Bogart", "This is the first Dog NFT", "Brown");
mintNFT("Bruno", "This is the second Dog NFT", "Black");
mintNFT("Bantay", "This is the third Dog NFT", "White");

// List the NFTs
listNFTs();

// Print the total supply
console.log("\nTotal Supply: " + getTotalSupply());


