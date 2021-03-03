import React from "react";
const data = {
	image:
		"https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/10/13124415/Bob-Dylan-01.jpg",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia"
	}
};
//create your first component
export function Card() {
	return (
		<div className="card m-5">
			<img
				className="card-img-top"
				src={data.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{data.cardTitle}</h5>
				<p className="card-text">{data.cardDescription}</p>
				<a href={data.button.url} className="btn btn-primary">
					{data.button.label}
				</a>
			</div>
		</div>
	);
}
