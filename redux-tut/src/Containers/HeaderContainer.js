import Header from "../components/Header";
import { connect } from "react-redux";




const mapStateToProps = state => ({

    data: state.cartItems

})

const mapDispatchToProps = dispatch => ({


    // addToCartHandler: data => dispatch(addToCart(data))
})



export default connect(mapStateToProps, mapDispatchToProps)(Header);















// export default Home;