import * as React from "react";
import fetch from "isomorphic-unfetch";
import {
	useTranslation,
	I18nPage,
	includeDefaultNamespaces,
} from "../utils/i18n";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = I18nPage & {
	stars: string;
};

const Home = ({ stars }: Props) => {
	const { t, i18n } = useTranslation();
	const dev = `This is my word. Language ${i18n.language}`;

	return (
		<div>
			<h1>
				{t("index:hello-world")} {dev}
			</h1>
			<div>Next stars: {stars}</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id
				volutpat lacus laoreet non curabitur gravida arcu. In eu mi bibendum
				neque egestas congue quisque egestas. Mi quis hendrerit dolor magna
				eget. At tempor commodo ullamcorper a lacus vestibulum sed. Malesuada
				fames ac turpis egestas. Vel pharetra vel turpis nunc eget lorem dolor.
				Nisl condimentum id venenatis a condimentum vitae sapien pellentesque
				habitant. Placerat orci nulla pellentesque dignissim enim sit. Faucibus
				a pellentesque sit amet porttitor eget dolor. In ornare quam viverra
				orci sagittis eu. Nunc congue nisi vitae suscipit tellus mauris a.
				Elementum nibh tellus molestie nunc non. Vitae elementum curabitur vitae
				nunc sed velit dignissim sodales. In fermentum et sollicitudin ac. Donec
				massa sapien faucibus et molestie ac feugiat sed. Congue mauris rhoncus
				aenean vel elit. Eu non diam phasellus vestibulum lorem sed risus
				ultricies tristique. Purus faucibus ornare suspendisse sed nisi lacus
				sed viverra. Aliquet nec ullamcorper sit amet risus.
			</p>
			<p>
				Aliquam malesuada bibendum arcu vitae elementum curabitur. Risus
				ultricies tristique nulla aliquet enim tortor. Venenatis urna cursus
				eget nunc. Quis commodo odio aenean sed adipiscing diam. Proin gravida
				hendrerit lectus a. Nulla posuere sollicitudin aliquam ultrices sagittis
				orci. Amet consectetur adipiscing elit duis tristique sollicitudin nibh
				sit. Ut eu sem integer vitae justo. Suspendisse faucibus interdum
				posuere lorem. Massa enim nec dui nunc mattis enim ut tellus elementum.
			</p>
			<p>
				Integer quis auctor elit sed vulputate mi. Ipsum dolor sit amet
				consectetur adipiscing elit pellentesque habitant. A condimentum vitae
				sapien pellentesque habitant morbi tristique senectus. Velit egestas dui
				id ornare. Quis hendrerit dolor magna eget est lorem ipsum. Gravida arcu
				ac tortor dignissim convallis aenean. Vel pretium lectus quam id.
				Natoque penatibus et magnis dis parturient montes nascetur ridiculus.
				Risus at ultrices mi tempus imperdiet. Nisi vitae suscipit tellus mauris
				a. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam.
				Odio morbi quis commodo odio. Nunc lobortis mattis aliquam faucibus
				purus in. Arcu non sodales neque sodales. Purus sit amet luctus
				venenatis lectus. A lacus vestibulum sed arcu non odio.
			</p>
			<p>
				Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. At
				imperdiet dui accumsan sit amet nulla facilisi. Egestas sed tempus urna
				et pharetra pharetra. Tortor aliquam nulla facilisi cras fermentum odio
				eu feugiat. Eget velit aliquet sagittis id consectetur purus ut
				faucibus. Phasellus egestas tellus rutrum tellus. Viverra vitae congue
				eu consequat ac. Sed vulputate mi sit amet mauris commodo quis imperdiet
				massa. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam.
				Dictum at tempor commodo ullamcorper. Ut sem viverra aliquet eget sit
				amet tellus cras adipiscing. Id diam vel quam elementum pulvinar etiam
				non. Sed ullamcorper morbi tincidunt ornare massa eget egestas.
				Facilisis sed odio morbi quis commodo odio aenean. Et malesuada fames ac
				turpis egestas. Aliquam sem et tortor consequat id porta nibh venenatis
				cras. Aliquet risus feugiat in ante metus. Mi proin sed libero enim sed
				faucibus. Ultrices dui sapien eget mi proin sed libero enim sed. Vitae
				turpis massa sed elementum tempus egestas sed sed risus.
			</p>
			<p>
				Nibh ipsum consequat nisl vel pretium lectus. Mi proin sed libero enim
				sed faucibus turpis in eu. Posuere urna nec tincidunt praesent semper
				feugiat. Nulla posuere sollicitudin aliquam ultrices sagittis. Mattis
				enim ut tellus elementum. Nec sagittis aliquam malesuada bibendum arcu
				vitae elementum curabitur. Arcu vitae elementum curabitur vitae nunc
				sed. Phasellus vestibulum lorem sed risus ultricies tristique nulla.
				Facilisis leo vel fringilla est. Purus non enim praesent elementum
				facilisis.
			</p>
		</div>
	);
};

export const getServerSideProps = async ({ locale }) => ({
	// Commenting out due to proxy errors
	// const res = await fetch("https://api.github.com/repos/zeit/next.js");
	// const json = await res.json();
	props: {
		// stars: json.stargazers_count,
		...(await serverSideTranslations(
			locale,
			includeDefaultNamespaces(["index"]),
		)),
	},
});

export default Home;
