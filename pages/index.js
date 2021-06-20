import styled from "styled-components"
import Link from "next/link"
import { Button } from "@material-ui/core"
import CloseButton from "components/CloseButton"

export default function Home() {
  return (
    <div>
      <main>
        <CloseButton />
        <SCText>ホーム</SCText>
        <Link href="/">
          <Button color="primary">
            <a>Home</a>
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button color="primary">
            <a>ログイン</a>
          </Button>
        </Link>
        <Link href="/auth/forget_password">
          <Button color="primary">
            <a>パスワード再設定</a>
          </Button>
        </Link>
      </main>
    </div>
  )
}

const SCText = styled.p`
  color: red;
`
