import FeedbackCard from "@/components/FeedbackCard";
import style from "@/styles/Display.module.css";
import axios from "axios";
import { urlForAllFeedback } from "../../urls/urls";
import { FeedbackReviewStatus } from "../../allDataTransfarObjectStucture/allEnums";

const Display = (props: any) => {
  return (
    <div className={style.container}>
      {props.data.map((item: any) => {
        return (
          <FeedbackCard
            key={item.id}
            id={item.id}
            email={item.email}
            subject={item.subject}
            topic={item.topic}
            description={item.description}
            createdAt={item.createdAt}
            status={item.status as keyof typeof FeedbackReviewStatus}

          />
        );
      })}
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await axios.get(urlForAllFeedback);
  return { props: { data: data.data } };
};

export default Display;
