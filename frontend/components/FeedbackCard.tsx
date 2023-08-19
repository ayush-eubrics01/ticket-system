import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { urlForAllFeedbackStatusChange } from "../urls/urls";
import { FeedbackReviewStatus } from "../allDataTransfarObjectStucture/allEnums";
import { useState } from "react";


const FeedbackCard = (props: Props) => {
  const [statusChangingButtonDisabled, setStatusChangingButtonDisabled] =
    useState(props.status === FeedbackReviewStatus.RESOLVED ? true : false);

  const [status, setStatus] = useState(props.status);

  const handleChangeStatusOfFeedback = async () => {
    const nextPropStatus =
      status === FeedbackReviewStatus.OPEN
        ? FeedbackReviewStatus.IN_PROGRESS
        : status === FeedbackReviewStatus.IN_PROGRESS
        ? FeedbackReviewStatus.RESOLVED
        : "";

    try {
      await axios.post(urlForAllFeedbackStatusChange, {
        id: props.id,
        status: nextPropStatus,
      });
      if (nextPropStatus === FeedbackReviewStatus.RESOLVED) {
        setStatusChangingButtonDisabled(true);
      }
      setStatus(nextPropStatus);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.subject}
        </Typography>
        <Typography variant="h5" component="div">
          {props.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`Topic: ${props.topic}`}
        </Typography>
        <Typography variant="body2">
          description: {props.description}
          <br />
          {`Issued on: ${props.createdAt}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography sx={{ fontSize: 14 }}>{`Status: ${status}`}</Typography>
        <Button
          size="small"
          sx={statusChangingButtonDisabled ? { display: "none" } : {}}
          onClick={handleChangeStatusOfFeedback}
        >
          Change Status
        </Button>
      </CardActions>
    </Card>
  );
};

interface Props {
  id: string;
  email: string;
  topic: string;
  subject: string;
  description: string;
  createdAt: string;
  status: string;

}

export default FeedbackCard;
