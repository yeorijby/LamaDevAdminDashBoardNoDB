import { Link } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart'
import {productData} from "../../dummyData";
import { Publish } from '@mui/icons-material';

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <div className="productTitle">Product</div>
            <Link to='/newProduct'>
                <button className="productAddButton">CREATE</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img className="productInfoImg" alt="" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form action="" className="productForm">
                <div className="productFormLeft">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder='Apple AirPod'/>
                    <label htmlFor="">In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">YES</option>
                        <option value="no">NO</option>
                    </select>
                    <label htmlFor="">Active</label>
                    <select name="active" id="active">
                        <option value="yes">YES</option>
                        <option value="no">NO</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img alt="" className="productUploadImg" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="productButton">UPDATE</button>
                </div>
            </form>
        </div>
    </div>
  )
}
 