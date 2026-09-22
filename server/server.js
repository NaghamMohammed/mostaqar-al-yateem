import dns from 'node:dns'
import express from 'express'

import {
  getNewsBySlug,
} from './services/news.js'

dns.setDefaultResultOrder('ipv4first')



const app =
  express()

const PORT = 5000


/*
 * =====================================================
 * اختبار الـ Backend
 * =====================================================
 */

app.get(
  '/api/test',
  (req, res) => {
    res.json({
      success: true,
      message:
        'Backend يعمل بنجاح 🌿',
    })
  }
)


/*
 * =====================================================
 * الأخبار
 *
 * مثال:
 *
 * /api/news/unrwa
 * /api/news/mosd
 * /api/news/wfp
 *
 * =====================================================
 */

app.get(
  '/api/news/:slug',
  async (req, res) => {
    try {
      const {
        slug,
      } = req.params

      const result =
        await getNewsBySlug(
          slug
        )

      res.json({
        success: true,
        ...result,
      })
    } catch (error) {
      console.error(
        'News service error:',
        error
      )

      res.status(500).json({
        success: false,
        message:
          'تعذر جلب الأخبار حاليًا.',
      })
    }
  }
)


/*
 * =====================================================
 * تشغيل السيرفر
 * =====================================================
 */

app.listen(
  PORT,
  () => {
    console.log(
      `Backend running on http://localhost:${PORT}`
    )
  }
)