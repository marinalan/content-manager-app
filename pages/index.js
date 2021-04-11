import React, { useState, useEffect } from "react"
import Layout from 'components/Layout'
import ResourceHighlight from 'components/ResourceHighlight'
import Newsletter from 'components/Newsletter'
import ResourceList from 'components/ResourceList'

function Home({resources}) {
  return (
    <Layout>
      <ResourceHighlight 
        resources={resources.slice(0, 2)}
      />
      <Newsletter />
      <ResourceList 
        resources={resources.slice(2)}
      />
    </Layout>
  )
}

export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  console.log(data.map(resource => {
    return {
      params: {id: resource.id}
    }
  }));

  return {
    props: {
      resources: data
    }
  }
}

export default Home