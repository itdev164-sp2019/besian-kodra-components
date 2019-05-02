import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layout/layout';
import Image from '../gatsby-components/image';
import SEO from '../gatsby-components/seo';
import { Button, IconButton, Section, Main } from '../components/Element';
import { Card } from 'rebass';
import { Search } from 'styled-icons/feather';
import { ShareButtonList } from '../components/SocialShareButton';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <Main
      flex
      justifyContent='space-evenly'
      fontSize={5}
      textTransform='uppercase'
      color='#ffffff'
      fontWeight='bold'
      alignItems='center'
      width={[1, 1]}
      px={4}
      py={4}
      my={10}
      mx={10}
      bg='#000000'
    >
      <Card
        flex
        fontSize={6}
        justifyContent='space-evenly'
        fontWeight='bold'
        width={1}
        px={4}
        py={4}
        my={10}
        mx={10}
        bg='#cccccc'
        borderRadius={8}
        boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
      >
        <Image />
      </Card>
      <Link
        to='/page-2'
        style={{
          color: `#fffbbb`,
          textDecoration: `none`,
          fontFamily: `Electrolize`
        }}
      >
        This is Besian
      </Link>
    </Main>
    <ShareButtonList
      addThisPubId='ra-5cca51cfb6e8e8c1'
      contentTitle='Fake title'
      contentImage='http://placekitten.com/g/300/700'
      contentDescription='Here is some stuff about Besian, and maybe kittens.'
    />
    <Section flex justifyContent='space-evenly' p={4}>
      <Link to='/page-2'>
        <Button varient='primary' width={1}>
          Button Response
        </Button>
      </Link>
      <IconButton icon={<Search />} />
    </Section>
  </Layout>
);

export default IndexPage;
