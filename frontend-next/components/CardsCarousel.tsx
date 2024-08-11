'use client';

import { useState } from 'react';

import { LeftIconBlack, LeftIconWhite, RightIconBlack, RightIconWhite } from '@/assets'
import { useTheme } from 'next-themes';


interface CardsCarouselProps {
	cards: JSX.Element[],
	cardsToDisplay?: number
}

export default function CardsCarousel({ cards, cardsToDisplay=3 }: CardsCarouselProps) {
	const { theme, setTheme } = useTheme();
	const [currentPage, setCurrentPage] = useState<number>(1);
	const totalPages = Math.ceil(cards.length / cardsToDisplay);
	const visableCards = cards.slice((currentPage - 1) * cardsToDisplay, currentPage * cardsToDisplay);

	function prevPage() {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		} else {
			setCurrentPage(totalPages);
		}
	}

	function nextPage() {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		} else {
			setCurrentPage(1);
		}
	}

	return (
		<div className='flex flex-row justify-center items-center gap-4 relative min-w-[932px] min-h-[275px]'>
			<div className='absolute -left-[35px] w-fit h-fit'>
				{theme === 'dark' 
					? <LeftIconWhite className='h-5 w-5 fill-white' onClick={prevPage} />
					: <LeftIconBlack className='h-5 w-5 fill-black' onClick={prevPage} />
				}
			</div>
			<div className='grid grid-flow-col grid-cols-3 gap-4 w-fit'>
				{visableCards.map((card, index) => (
					<div key={index} className={`w-[${100 / cardsToDisplay}%] h-[275px]`}>
						{card}
					</div>
				))}
			</div>
			<div className='absolute -right-[35px] w-fit h-fit'>
				{theme === 'dark'
					? <RightIconWhite className='h-5 w-5 fill-white' onClick={nextPage} />
					: <RightIconBlack className='h-5 w-5 fill-black' onClick={nextPage} />
				}
			</div>
		</div>
	)
}