import { useState } from 'react';
const App = () => {
	const [input, setInput] = useState(0);

	const handleChangeInput = (event) => setInput(event.target.value);

	return (
		<div className='flex flex-col h-screen'>
			<input
				type='number'
				value={input}
				onChange={handleChangeInput}
				className='bg-black text-white select-all outline-none h-1/4 text-right text-6xl'
				autoFocus
			/>
			<div className='h-3/4 grid grid-rows-5 grid-cols-4 place-items-center'>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					AC
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					+/-
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					%
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					÷
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					7
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					8
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					9
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					×
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					4
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					5
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					6
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					-
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					1
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					2
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					3
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					+
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-3/4 text-white col-span-2'
				>
					0
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					.
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white'
				>
					=
				</button>
			</div>
		</div>
	);
};
export default App;
