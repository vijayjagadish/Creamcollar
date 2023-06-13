import React from 'react'

import { Article } from '../../components';

import { gear, cap, capdone } from './imports';
import './opportunity.css';
const Opportunity = () => {
  return (
    <div className='creamcollar__oppo'>
      <div className='creamcollar__opp-heading'>
        <h1>Opportunities through collaboration</h1>
      </div>
      <div className='creamcollar__opp-container'>
        <div className='creamcollar__opp-container_groupA'>
           <Article imgUrl={gear} title='Industry' title1='Access to highly skilled industry ready talent to reduce skill gap' title2='Optimize Research and Development cost through shared innovation' title3='Be the front runners in building new age capabilities in SDV’s' />
           <Article imgUrl={cap} title='Academia' title1='Access to industrial expertise for Academic Research and Incubations' title2='Higher placements and better internships for the students' title3='Introducing more Industry relevant electives'/>
           <Article imgUrl={capdone} title= 'Students' title1='Career awareness and clarity from early stages of academic courses' title2='Research oriented learning by solving real world industry problems' title3='Community based learning through Industry and academic mentorship'/>
        </div>
      </div>
    </div>
  )
}

export default Opportunity