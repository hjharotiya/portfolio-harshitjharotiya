import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { SiGeeksforgeeks } from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocial = () => {
  return (
	  <div className='header-socials'>
		  <a href='https://www.linkedin.com/in/harshit-jharotiya-105215212/' target="_blank"><BsLinkedin/> </a>
		  <a href='https://github.com/hjharotiya' target="_blank"><AiFillGithub/></a>
		  <a href='https://auth.geeksforgeeks.org/user/jharotiyaharshit/profile' target="_blank"><SiGeeksforgeeks/></a>
		  <a href='https://leetcode.com/jharotiyaharshit/' target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocial