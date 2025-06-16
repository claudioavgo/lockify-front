import { getApiClient } from "@/lib/api";
import { FeedbackSchemaType } from "@/schemas/feedback.schema";

export async function getFeedbacks(): Promise<FeedbackSchemaType[]> {
  const feedbacks = await getApiClient()
    .get("/feedbacks")
    .catch((error) => {
      return {
        data: null,
        error: error.message,
      };
    });

  return feedbacks.data;
}

export async function isDailyFeedbackCompleted(): Promise<boolean> {
  const feedbacks = await getFeedbacks();

  console.log(feedbacks);

  if (feedbacks) {
    const lastFeedback = feedbacks.filter((feedback) => {
      const createdAt = new Date(feedback.created_at);
      const now = new Date();

      console.log("Date", now.toDateString());
      console.log("CreatedAt", createdAt.toDateString());
      return createdAt.toDateString() >= now.toDateString();
    });

    console.log("lastFeedback", lastFeedback);

    return lastFeedback.length > 0;
  }

  return false;
}

export async function createFeedback(
  rating: number
): Promise<FeedbackSchemaType> {
  const feedback = await getApiClient()
    .post("/feedbacks", { rating })
    .catch((error) => {
      return {
        data: null,
        error: error.message,
      };
    });

  return feedback.data;
}
