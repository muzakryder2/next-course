import { redirect } from "next/navigation";

function getRamdomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // const random = getRamdomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    redirect("/products");
  }

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
