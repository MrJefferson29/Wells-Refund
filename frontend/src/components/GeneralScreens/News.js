import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Calendar, Clock, MessageCircle, Search, Tag, User2, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

const News = () => {
  const allPosts = useMemo(() => ([
    {
      category: "Banking",
      date: "September 16, 2022",
      title: "How Non-US Citizens can Open a Bank Account",
      excerpt: "How Non-U.S. Citizens Can Open a Bank Account — A Step-by-Step Guide by Swift Claim Bank. Banking shouldn’t be ...",
      time: "6:17 pm",
      comments: 0,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    },
    {
      category: "Finance",
      date: "September 16, 2022",
      title: "The National Avg Interest Rate for Savings Accounts",
      excerpt: "What Is the National Average Interest Rate for Savings Accounts? In 2025, the national average interest rate ...",
      time: "6:13 pm",
      comments: 3,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    },
    {
      category: "Press Release",
      date: "September 16, 2022",
      title: "Small Steps to Build Your Better Future",
      excerpt: "Small Steps to Make a Better Future — How Simple Habits Today Can Lead to Big Results Tomorrow ...",
      time: "6:06 pm",
      comments: 0,
      image: "https://images.unsplash.com/photo-1515165562835-c3b8c2e0b4b8?q=80&w=1600&auto=format&fit=crop",
    },
    {
      category: "Finance",
      date: "September 16, 2022",
      title: "Holds In These Matters To This Principle of Selection",
      excerpt: "Don’t just save money, make more money with a checking account from us. – Franklin In a ...",
      time: "6:04 pm",
      comments: 0,
      image: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&w=1600&auto=format&fit=crop",
    },
    {
      category: "Finance",
      date: "September 16, 2022",
      title: "Accepted always holds in these matters to this principle",
      excerpt: "Don’t just save money, make more money with a checking account from us. – Franklin Accepted always ...",
      time: "6:01 pm",
      comments: 0,
      image: "https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1600&auto=format&fit=crop",
    },
  ]), []);

  const [query, setQuery] = useState("");
  const posts = useMemo(() => {
    if (!query.trim()) return allPosts;
    return allPosts.filter(p => (
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    ));
  }, [allPosts, query]);

  return (
    <Page>
      <Header>
        <Title>News & Insights</Title>
        <Subtitle>Get more creative with your money. Stories, updates, and tips from Swift Claim Bank.</Subtitle>
      </Header>

      <Grid>
        {/* Posts */}
        <Posts>
          {posts.map((post, idx) => (
            <Post key={idx}>
              <Thumb src={post.image} alt={post.title} />
              <PostBody>
                <Meta>
                  <Cat>{post.category}</Cat>
                  <Dot />
                  <MetaItem><Calendar size={16} /> {post.date}</MetaItem>
                </Meta>
                <PostTitle>{post.title}</PostTitle>
                <Excerpt>{post.excerpt}</Excerpt>
                <MetaFoot>
                  <MetaItem><Clock size={16} /> Posted : {post.time}</MetaItem>
                  <MetaItem><MessageCircle size={16} /> {post.comments} Comments</MetaItem>
                </MetaFoot>
                <ReadMore as={Link} to="#">Read More <ChevronRight size={16} /></ReadMore>
              </PostBody>
            </Post>
          ))}
        </Posts>

        {/* Sidebar */}
        <Sidebar>
          <Widget>
            <WidgetTitle>Search</WidgetTitle>
            <SearchBox>
              <SearchIcon />
              <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search posts..." />
            </SearchBox>
          </Widget>

          <Widget>
            <WidgetTitle>Categories</WidgetTitle>
            <TagList>
              {['Banking', 'Finance', 'Press Release'].map((c) => (
                <TagItem key={c} onClick={() => setQuery(c)}>{c}</TagItem>
              ))}
            </TagList>
          </Widget>

          <Widget>
            <WidgetTitle>Popular Post</WidgetTitle>
            <MiniPost>
              <MiniThumb src="https://images.unsplash.com/photo-1515165562835-c3b8c2e0b4b8?q=80&w=800&auto=format&fit=crop" />
              <MiniBody>
                <MiniTitle>Small Steps to Your Better Future.</MiniTitle>
                <MiniList>
                  <li>Personalized Financial Guidance</li>
                  <li>Get expert advice tailored to your goals — not generic solutions.</li>
                </MiniList>
              </MiniBody>
            </MiniPost>
            <SupportButton as={Link} to="#">Get Support</SupportButton>
          </Widget>

          <Widget>
            <WidgetTitle>Popular Tags</WidgetTitle>
            <Tags>
              {['Cards','Careers','Deposit','Fees','Investor','Payment','Security','Women\'s Account'].map((t) => (
                <Chip key={t} onClick={() => setQuery(t)}><Tag size={14} /> {t}</Chip>
              ))}
            </Tags>
          </Widget>
        </Sidebar>
      </Grid>
    </Page>
  );
};

// Styles
const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Header = styled.header`
  padding: 16px;
`;

const Title = styled.h1`
  margin: 0 0 6px;
  font-size: 36px;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #555;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 16px;
  padding: 0 16px 32px;

  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

const Post = styled.article`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 220px;
`;

const PostBody = styled.div`
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: #666;
  font-size: 14px;
`;

const Cat = styled.span`
  background: #000;
  color: #fff;
  border-radius: 999px;
  padding: 4px 10px;
  font-weight: 700;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #bbb;
  display: inline-block;
`;

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const PostTitle = styled.h3`
  margin: 0;
`;

const Excerpt = styled.p`
  margin: 0;
  color: #555;
`;

const MetaFoot = styled.div`
  display: flex;
  gap: 12px;
  color: #666;
  font-size: 14px;
`;

const ReadMore = styled(Link)`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  font-weight: 700;
  color: #111;
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Widget = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 14px 16px;
`;

const WidgetTitle = styled.h4`
  margin: 0 0 10px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f7f7f7;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 8px 10px;
`;

const SearchIcon = styled(Search)`
  color: #777;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
`;

const TagList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TagItem = styled.button`
  text-align: left;
  background: #f7f7f7;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 8px 10px;
  font-weight: 700;
  cursor: pointer;
`;

const MiniPost = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 10px;
`;

const MiniThumb = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
`;

const MiniBody = styled.div``;

const MiniTitle = styled.h5`
  margin: 0 0 6px;
`;

const MiniList = styled.ul`
  margin: 0;
  padding-left: 16px;
  color: #555;
`;

const SupportButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  background: #000;
  color: #fff;
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f7f7f7;
  border: 1px solid #eee;
  border-radius: 999px;
  padding: 6px 10px;
  font-weight: 700;
  cursor: pointer;
`;

export default News;
