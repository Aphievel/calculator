import { useState } from 'react';
const App = () => {
	const [input, setInput] = useState(0);
	const [secondInput, setSecondInput] = useState(0);
	const [enableSecondInput, setEnableSecondInput] = useState(false);
	const [mathOperation, setMathOperation] = useState('');

	const inputState = enableSecondInput ? secondInput : input;
	const inputStateSetter = enableSecondInput ? setSecondInput : setInput;

	const handleChangeInput = (event) => inputStateSetter(event.target.value);

	const handleClick = (num) => {
		if (num === '+/-') {
			inputStateSetter(-inputState);
		} else if (num === 'AC') {
			setInput(0);
			setSecondInput(0);
			setEnableSecondInput(false);
			setMathOperation('');
		} else if (num === '%') {
			inputStateSetter(inputState / 100);
		} else if (num === '.') {
			inputStateSetter(String(inputState).concat('.'));
		} else if (inputState === 0) {
			inputStateSetter(Number(num));
		} else if (num === '0' && typeof inputState === 'string') {
			inputStateSetter(inputState.concat(num));
		} else {
			inputStateSetter(Number(String(inputState).concat(num)));
		}
	};

	const handleClickforOperation = (operation) => {
		if (operation === 'equals') {
			setInput(mathFunction(mathOperation, input, secondInput));
			setEnableSecondInput(false);
		} else {
			setMathOperation(operation);
			setEnableSecondInput(true);
		}
	};

	const mathFunction = (operation, a, b) => {
		switch (operation) {
			case 'div':
				setSecondInput(0);
				return a / b;
			case 'mult':
				setSecondInput(0);
				return a * b;
			case 'add':
				setSecondInput(0);
				return a + b;
			case 'sub':
				setSecondInput(0);
				return a - b;
			default:
				return 'error';
		}
	};

	return (
		<div className='flex flex-col h-screen'>
			<input
				type='text'
				inputMode='numeric'
				value={inputState}
				onChange={handleChangeInput}
				className='bg-black text-white select-all outline-none h-1/4 text-right text-6xl appearance-none'
			/>
			<div className='h-3/4 grid grid-rows-5 grid-cols-4 place-items-center'>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClick('AC')}
				>
					AC
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-slate-300 select-none'
					onClick={() => handleClick('+/-')}
				>
					+/-
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-slate-300 select-none'
					onClick={() => handleClick('%')}
				>
					%
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white focus:bg-slate-300 select-none'
					onClick={() => handleClickforOperation('div')}
				>
					÷
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-slate-300 select-none'
					onClick={() => handleClick('7')}
				>
					7
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClick('8')}
				>
					8
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClick('9')}
				>
					9
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white focus:bg-gray-300 select-none'
					onClick={() => handleClickforOperation('mult')}
				>
					{/* This is the unicode character for multipilcation not 'x' */}×
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClick('4')}
				>
					4
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClick('5')}
				>
					5
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClick('6')}
				>
					6
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white focus:bg-gray-300 select-none'
					onClick={() => handleClickforOperation('sub')}
				>
					-
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClick('1')}
				>
					1
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClick('2')}
				>
					2
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClick('3')}
				>
					3
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white focus:bg-gray-300 select-none'
					onClick={() => handleClickforOperation('add')}
				>
					+
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-3/4 text-white active:bg-gray-300 select-none col-span-2'
					onClick={() => handleClick('0')}
				>
					0
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClick('.')}
				>
					.
				</button>
				<button
					type='button'
					className='bg-gray-400 rounded-full h-1/2 w-1/2 text-white active:bg-gray-300 select-none'
					onClick={() => handleClickforOperation('equals')}
				>
					=
				</button>
			</div>
		</div>
	);
};
export default App;
