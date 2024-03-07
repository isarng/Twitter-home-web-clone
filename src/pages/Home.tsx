import { useState } from "react";

// Components
import Avatar from "components/core/Avatar/Avatar";
import SearchInput from "components/core/Input/SearchInput";
import HamburgerMenu from "components/core/Navigation/HamburgerMenu";
import Tweet, { TweetProps } from "components/core/Tweet/Tweet";
import TweetBar from "components/core/Tweet/TweetBar";
import Button from "components/core/buttons/Button";
import Card from "components/core/cards/Card";
import Trend from "components/core/cards/Trend";
import Section from "components/core/lists/Section";
import MessageBar from "components/ui/MessageBar";
import TopBar from "components/ui/TopBar";

// Data
import Retweet from "components/core/Tweet/Retweet";
import retweetData from "data/retweet.json";
import trendData from "data/trends.json";
import tweetData from "data/tweets.json";
import WTFData from "data/wtf.json";

const Home = () => {
  // mobile responsive hamburger menu component state
  const [toggleHamMenu, setToggleHamMenu] = useState<boolean>(false);

  return (
    <>
      <Section className="feed">
        <TopBar
          title="Home"
          toggleHamMenu={() => setToggleHamMenu(!toggleHamMenu)}
        >
          <div className="link-wrapper">
            <ul className="top-links">
              <li>
                <a href="/home" className="active">
                  For you
                </a>
              </li>
              <li>
                <a href="/home">Following</a>
              </li>
            </ul>
          </div>
        </TopBar>
        <TweetBar />
        <Tweet
          hasControls
          hasMenu={false}
          avatar="https://64.media.tumblr.com/4ae42246247975fc72c2d7a955565efe/af4537634303c92b-5e/s1280x1920/6b72bb6b0efda618ed9daacf33d1fb6fc9b38993.jpg"
          username="victoria"
          name="viralvictoria"
          time="1m"
          status="gold"
          replies={80}
          retweets={50}
          likes={200}
          views={300}
          content={
            <>
              did i just witness a crime?? i never would've imagined ronrexstuff doing something like that
            </>
          }
        />
        <Retweet
          tweet={{
            avatar: "data:image/jpeg;base64,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",
            username: "Chad",
            name: "UrbanExplorerX",
            time: "3h",
            content: (
              <>
                aint no way you feel bad for him LMAOO {" "}
                <span
                  className="hashtags"
                  style={{ color: "var(--primary-color)" }}
                >
                  {/* <a href="/profile">@{retweetData[0].name}</a> */}
                </span>
                .
              </>
            ),
            status: "none",
            replies: 7,
            retweets: 3,
            likes: 18,
            views: 55,
          }}
          retweetContent={retweetData[0] as TweetProps}
        />
        {/* {retweetData.map((twt) => {
          return (
            <Tweet
              hasControls
              hasMenu
              key={`${twt.name}_${twt.username}`}
              avatar={twt.avatar}
              name={twt.name}
              username={twt.username}
              time={twt.time}
              status={twt.status as "gold" | "blue"}
              content={twt.content}
              images={twt.images}
              replies={twt.replies}
              retweets={twt.retweets}
              likes={twt.likes}
              views={twt.views}
            />
          );
        })} */}
        {/* <Retweet
          tweet={tweetData[1] as TweetProps}
          retweetContent={tweetData[7] as TweetProps}
        /> */}
        {tweetData.map((twt) => {
          return (
            <Tweet
              hasControls
              hasMenu
              key={`${twt.name}_${twt.username}`}
              avatar={twt.avatar}
              name={twt.name}
              username={twt.username}
              time={twt.time}
              status={twt.status as "gold" | "blue"}
              content={twt.content}
              images={twt.images}
              replies={twt.replies}
              retweets={twt.retweets}
              likes={twt.likes}
              views={twt.views}
            />
          );
        })}
      </Section>
      <Section className="rightbar">
        <div className="wrapper">
          <div className="search-wrapper">
            <SearchInput />
          </div>
          <div className="space"></div>
          <Card headerText="Get Verified">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0px 1rem 1rem",
                gap: ".6rem",
              }}
            >
              <h4>Subscribe to unlock more features</h4>
              <Button
                id="ver-btn"
                style={{
                  width: "fit-content",
                }}
              >
                Get verified
              </Button>
            </div>
          </Card>
          <Card headerText="Trends for you">
            {trendData.map((t, k) => {
              return (
                <Trend
                  key={t.name}
                  name={t.name}
                  category={t.category}
                  tweetVolume={t.tweetVolume}
                />
              );
            })}
            <div className="card-ls-link">
              <a href="/tends/more">show more</a>
            </div>
          </Card>
          <Card headerText="Who to follow">
            {WTFData.map((w, k) => {
              return (
                <div className="user-to-follow" key={w.name}>
                  <Avatar src={w.avatar} />
                  <div className="main">
                    <span className="username">
                      {w.name}
                      <span className="emoji">{w.emoji}</span>
                    </span>
                    <span className="name">{w.username}</span>
                  </div>
                  <Button className="follow-btn">follow</Button>
                </div>
              );
            })}
            <div className="card-ls-link">
              <a href="/wtf/more">show more</a>
            </div>
          </Card>
          <div className="links">
            <nav aria-label="Footer" role="navigation">
              <a href="/tos">Terms of service</a>
              <a href="/pp">Privacy Policy</a>
              <a href="/cp">Cookie Policy</a>
              <br />
              <a href="/acc">Accessibility</a>
              <a href="/adds/info">Ads info</a>
              <span className="more">
                <span className="text">more </span>
                <span className="elli">&#8230;</span>
              </span>
              <span className="copyright">&#169; 2023 X CORP</span>
            </nav>
          </div>

          <MessageBar>{/** */}</MessageBar>
        </div>
      </Section>
      <HamburgerMenu
        toggle={toggleHamMenu}
        onClose={() => setToggleHamMenu(false)}
      />
    </>
  );
};

export default Home;
