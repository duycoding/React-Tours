import React from 'react'
import Title from './Title'
import { tours } from '../data'
import { useState } from 'react'

const Tours = () => {
	const [tour, setTour] = useState(tours)

	const removeFromTour = (id) => {
		let newTours = tour.filter((tour) => tour.id !== id)
		setTour(newTours)
	}

	return (
		<section className="section" id="tours">
			<Title title="featured" subTitle="tours" />
			<div className="section-center featured-center">
				{tour.map((tour) => {
					const { id, date, title, text, place, time, price, img } = tour
					return (
						<>
							<article className="tour-card" key={id}>
								<div className="tour-img-container">
									<img src={img} className="tour-img" alt="" />
									<p className="tour-date">{date}</p>
								</div>
								<div className="tour-info">
									<h4>{title}</h4>
									<p>{text}</p>
									<div className="tour-footer">
										<p>
											<span>
												<i className="fas fa-map"></i>
											</span>{' '}
											{place}
										</p>
										<p>{time}</p>
										<p>{price}</p>
									</div>
								</div>
								<button className="btn" onClick={() => removeFromTour(id)}>
									delete tour
								</button>
							</article>
						</>
					)
				})}
			</div>
		</section>
	)
}

export default Tours
