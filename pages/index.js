import Axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import styles from '../styles/Home.module.css'
import ItemList from '../src/component/ItemList';

export default function Home({list}) {

  return (
    <div>
      <Head>
        <title>HOME | 코딩앙마</title>
        <meta name='description' content='코딩 앙마 홈입니다.'></meta>
      </Head>
        <>
          <Header as='h3' style={{paddingTop: 40}}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as='h3' style={{paddingTop: 40}}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      
      {/* create-next-app create-next-app으로 설치하면
      <br />
      1. 컴파일과 번들링이 자동으로 된다.(webpack과 babel)
      <br />
      2. 자동 리프레쉬 기능으로 수행하면 화면에 바로 반영합니다.
      <br />
      3. 서버사이드 렌더링이 지원됩니다.
      <br />
      4. 스태틱 파일을 지원합니다. */}

      {/*
      Next js 모든 페이지 사전 렌더링(Pre-rendering)
      더 좋은 퍼포먼스
      검색엔진 최적화(SEO)

      1. 정적 생성
      2. Server Side Rendering (SSR, Dynamic Rendering)

      차이점은 언제 html 파일을 생성하는가

      [정적 생성]
      - 프로젝트가 빌드하는 시점에 html파일들이 생성
      - 모든 요청에 재사용
      - 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
      - 정적 생성된 페이지들은 CDN에 캐시
      - getStaticProps / getStaticPaths

      [서버사이드 렌더링]은 매 요청마다 html을 생성
      - 항상 최신 상태 유지
      - getServerSideProps
      */}
    </div>
  );
}

export async function getStaticProps(context){
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    }
  }
}
