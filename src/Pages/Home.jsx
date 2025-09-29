import React from 'react'
import Section from '../components/Section'
import TrendingProducts from '../components/TrendingProducts'
import OurCategory from '../components/OurCategory'
import Sale from '../components/Sale'
import ReadyPrefectPlant from '../components/ReadyPrefectPlant'

export default function Home() {
 
  return (
    <>
       <Section/>
    <TrendingProducts/>
    <Sale/>
    <OurCategory/>
    <ReadyPrefectPlant/>
    </>
  )
}
