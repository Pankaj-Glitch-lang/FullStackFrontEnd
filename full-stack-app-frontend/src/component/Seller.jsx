import React from 'react'

const Seller = () => {
    return (
        <div>

            <form action="http://localhost:8080/upload" method="POST" enctype="multipart/form-data"> <br />
                <input type="text" name="productName" placeholder="Product Name" required /><br />
                <input type="text" name="productPrice" placeholder="Product Price" required /> <br />
                <textarea name="productDescription" placeholder="Product Description"></textarea> <br />
                <input type="file" name="productImage" required /> <br />
                <button type="submit">Upload Product</button>
            </form>

        </div>
    )
}

export default Seller