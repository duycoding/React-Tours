import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
	{ id: 1, href: '#home', text: 'home' },
	{ id: 2, href: '#about', text: 'about' },
	{ id: 3, href: '#services', text: 'services' },
	{ id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
	{ id: 1, href: 'https://web.facebook.com/', icon: 'fab fa-facebook' },
	{ id: 2, href: 'https://www.twitter.com/', icon: 'fab fa-twitter' },
	{ id: 3, href: 'https://www.squarespace.com/', icon: 'fab fa-squarespace' },
]

/*  <article className="service">
					<span className="service-icon">
						<i className="fas fa-wallet fa-fw"></i>
					</span>
					<div className="service-info">
						<h4 className="service-title">saving money</h4>
						<p className="service-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores, officia.
						</p>
					</div>
				</article> */

export const services = [
	{
		id: 1,
		icon: 'fas fa-wallet fa-fw',
		title: 'saving money',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at minus, dicta reiciendis nulla ut dolores adipisci.',
	},
	{
		id: 2,
		icon: 'fas fa-tree fa-fw',
		title: 'endless hiking',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at minus, dicta reiciendis nulla ut dolores adipisci.',
	},
	{
		id: 3,
		icon: 'fas fa-tree fa-fw',
		title: 'amazing comfort',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at minus, dicta reiciendis nulla ut dolores adipisci.',
	},
]

/*<article className="tour-card">
					<div className="tour-img-container">
						<img src={tour1} className="tour-img" alt="" />
						<p className="tour-date">august 26th, 2020</p>
					</div>
					<div className="tour-info">
						<div className="tour-title">
							<h4>Tibet Adventure</h4>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
							vitae tempore voluptatum maxime reprehenderit eum quod
							exercitationem fugit, qui corporis.
						</p>
						<div className="tour-footer">
							<p>
								<span>
									<i className="fas fa-map"></i>
								</span>{' '}
								china
							</p>
							<p>6 days</p>
							<p>from $2100</p>
						</div>
					</div>
				</article> */

export const tours = [
	{
		id: 'tour1',
		img: tour1,
		date: 'august 26th, 2020',
		title: 'Tibet Adventure',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
		place: 'china',
		time: '6 days',
		price: 'from $2100',
	},
	{
		id: 'tour2',
		img: tour2,
		date: 'october 1th, 2020',
		title: 'best of java',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
		place: 'indonesia',
		time: '11 days',
		price: 'from $1400',
	},
	{
		id: 'tour3',
		img: tour3,
		date: 'september 15th, 2020',
		title: 'explore hong kong',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
		place: 'hong kong',
		time: '8 days',
		price: 'from $5000',
	},
	{
		id: 'tuor4',
		img: tour4,
		date: 'december 5th, 2019',
		title: 'kenya highlights',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
		place: 'kenya',
		time: '20 days',
		price: 'from $3300',
	},
]
