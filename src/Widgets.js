import React from "react";
import { FiberManualRecord, Info } from "@mui/icons-material";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle(
        "Hollywood’s Fight Against VPNs Turns Ugly",
        "Top News - 4988 readers"
      )}
      {newsArticle(
        "One of the most powerful DDoSes ever targets cryptocurrency platform",
        "Top News - 1345 readers"
      )}
      {newsArticle(
        "GitHub to Developers: Turn on 2FA, or Lose Access",
        "Top News -1023 readers"
      )}
      {newsArticle(
        "Microsoft detects Spring4Shell attacks across its cloud services",
        "Top News - 458 readers"
      )}
      {newsArticle(
        "Coming to a laptop near you: A new type of security chip from Microsoft",
        "Top News - 984 readers"
      )}
      {newsArticle(
        "Microsoft is making it harder to steal Windows passwords from memory",
        "Top News - 129 readers"
      )}
      {newsArticle(
        "Your iOS app may still be covertly tracking you, despite what Apple says",
        "Top News - 2890 readers"
      )}
      {newsArticle(
        "Apple could soon turn the iPhone into a recurring subscription service",
        "Top News - 1084 readers"
      )}
    </div>
  );
}

export default Widgets;
