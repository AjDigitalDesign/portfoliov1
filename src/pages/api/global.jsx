import client from "../../lib/client";
import groq from "groq";

const fetchGlobalContent = async  () => {
    const query = groq`
    {
        "global": *[_id == 'global-config'][0]{
            ...,
        },
        "homepage": *[_id == "homePage"][0]{
          "title": hero.title,
          "subtitle": hero.subtitle,
          "description": hero.description,
          "buttonLink": hero.navItemUrl.linkUrl,
          "buttonTitle": hero.navItemUrl.title,
          "backgroundImage": hero.image.asset->url,
          ...,
        }
    }
    `;
    return await client.fetch(query);
}

export default async (req, res) => {
    res.send(await fetchGlobalContent());
};