import { articles } from '../../../data';

export default function handler(request, response) {
  const { id } = request.query;
  const filtered = articles.filter((article) => article.id === id);
  if (filtered.length) {
    return response.status(200).json(filtered[0]);
  } else {
    return response
      .status(404)
      .json({ message: `Article with the id of ${id} not found` });
  }
}
