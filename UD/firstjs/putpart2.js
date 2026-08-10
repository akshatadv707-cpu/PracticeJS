


function fetchProduct(id){
    return new Promise((resolve) => {
        setTimeout(() => resolve({id,name:'Alice'}),500);
    });
}

async function main(){
    const products= await Promise.all([fetchProduct(1),fetchProduct(2),fetchProduct(3)]);
    for(const product of products){
        console.log(product.name);
    }
}
main();