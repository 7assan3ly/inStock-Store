import axios from "axios";

const url = 'https://fakestoreapi.com'

// Get Home Page Products (Hot Deals)
export const getHotDeals = async () => {
    let productsNum = 8;
    try {
        const hotDeals = await axios.get(`${url}/products?limit=${productsNum}`)
        return hotDeals.data
    } catch (error) {
        console.log(error);
    }
}

// Get Categories List
export const getCatg = async () => {
    try {
        const catg = await axios.get(`${url}/products/categories`)
        return catg.data
    } catch (error) {
        console.log(error);
    }
}

// Get Specefic Category Products
export const getCatgProducts = async (catgName) => {
    try {
        const catgProduct = await axios.get(`${url}/products/category/${catgName}`)
        return catgProduct.data
    } catch (error) {
        console.log(error);
    }
}

// Get Specific Product by ID
// export const getProductByID = async (id) => {
//     try {
//         const response = await fetch(`${url}/products/10`)
//         const data = await response.json()
//         console.log('json',data);
//         return data
//     } catch (error) {
//         console.log(error);
//     }
// }