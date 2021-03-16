import React, { useEffect } from "react";

import Header from "../header";

import ProductPage from "../../page";

import { useDispatch } from "react-redux";
import { allProducts } from "../../actions";
import { request } from "../../api";


const App: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		request().then(data => {
			dispatch(allProducts(data));
		}).catch((err) => {
			alert(err.message || "Server error")
		})
	})

	return (
		<>
			<Header />
			<ProductPage />
		</>
	)
}

export default App;