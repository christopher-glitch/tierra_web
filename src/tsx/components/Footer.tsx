import { useState } from 'react';
import { Drawer, IconButton } from "@material-tailwind/react";
import { Link } from 'react-router-dom'

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from '@heroicons/react/24/solid';

import icon from '../../images/icon.png';
import '../../css/index.css';


function Header() {

	const [open, setOpen] = useState(false);
	const drawerOpen = () => setOpen(true);
	const drawerClose = () => setOpen(false);

	return (
		<header className="shadow-[0px_1px_12px_2px_#808080] w-screen bg-[#FFFFFF] dark:bg-[#040413]">
			<div className="container flex mx-auto p-5 items-center">
				<Link to={'/'}>
					<div className="flex items-center">
						<img src={icon} className="icon" alt="logo" />
						<span className='p-3 font-bassa text-3xl text-gray-800 dark:text-white'> 𖫦𖫣𖫫𖫰𖫞𖫞𖫭𖫰 </span>
					</div>
				</Link>
				<nav className='text-gray-600 dark:text-gray-300 ml-auto invisible lg:visible '>
					<Link to={'/'} className='mr-7 text-xl font-orbitron hover-underline-animation'> Home </Link>
					<Link to={'/about'} className='mr-7 text-xl font-orbitron hover-underline-animation'> About </Link>
					<Link to={'/discography'} className='mr-7 text-xl font-orbitron hover-underline-animation'> Discography </Link>
				</nav>
				<div className={!open ? 'block lg:hidden' : 'hidden'}>
					<IconButton
						variant="text"
						color='blue-gray'
						onClick={drawerOpen}
					>
						<Bars3Icon strokeWidth={2} className='w-10 h-8' />
					</IconButton>
				</div>
				<Drawer
					placement="right"
					open={open}
					onClose={drawerClose}
					className="p-4 bg-[#FFFFFF] dark:bg-[#040413]"
				>
					<div className="mb-6 flex items-center justify-between">
						<text className='text-xl font-orbitron font-extrabold text-gray-900'  >
							Contents
						</text>
						<IconButton
							variant="text"
							color='blue-gray'
							onClick={drawerClose}
						>
							<XMarkIcon strokeWidth={2} className="h-6" />
						</IconButton>
					</div>
					<ul className='text-left pl-3'>
						<li>
							<Link to={'/'} onClick={drawerClose} className='my-2 text-xl font-orbitron text-gray-600 hover-underline-animation'> Home </Link>
						</li>
						<li>
							<Link to={'/about'} onClick={drawerClose} className='my-2 text-xl font-orbitron text-gray-600 hover-underline-animation'> About </Link>
						</li>
						<li>
							<Link to={'/discography'} onClick={drawerClose} className='my-2 text-xl font-orbitron text-gray-600 hover-underline-animation'> Discography </Link>
						</li>
					</ul>
				</Drawer>
			</div>
		</header>
	);
}

export default Header;