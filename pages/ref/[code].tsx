import { useRouter } from 'next/router'
import { setCookie } from 'nookies'

export default function Code() {

  const router = useRouter()
  const { code } = router.query

  if (code) {
    setCookie(undefined, 'imperiumtruck.uplinecode', code.toString(), {
      maxAge: 60 * 60 * 24 * 365, //365 days
      path: '/'
    })
    router.push('/')
  }

  return <></>
}