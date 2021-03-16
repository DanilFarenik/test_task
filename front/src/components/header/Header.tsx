import React, { useState } from 'react';

import Modal from '@material-ui/core/Modal';

import ModalBody from "../modal";

import "./header.css";

const Header: React.FC = () => {

	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose: () => void = () => {
		setOpen(false);
	};


	return (
		<header className="header">
			<div className="header__box">
				<img className="header__logo" src="/logo.jpg" alt="logo" />
				<h1 className="header__h1">crud</h1>
			</div>
			<div className="header__box">
				<div>
					<button type="button" className="header__btn" onClick={handleOpen}>
						Add hot-dog
					</button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
					>
						<>
							<ModalBody handleClose={handleClose} />
						</>
					</Modal>
				</div>
			</div>
		</header>
	);
}

export default Header;
