import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mt-4 text-center mb-4 font-bold">
        Youtube channel information
      </h1>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@eng_stepbystep1/videos"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          기초영어 Step by Step
        </Link>
        <p className="mb-2">
          기초 영어 단어와 문법을 독학으로 배울 수 있는 기초영어 Step by Step
        </p>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://www.youtube.com/@lsy_math/featured"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          이상엽Math
        </Link>
        <p className="mb-2">
          기초 수학을 쉽게 배울 수 있고 우리가 배우는 암호수학, 선형대수학의
          기초도 배울 수 있는 이상엽Math
        </p>
      </div>
    </>
  )
}
