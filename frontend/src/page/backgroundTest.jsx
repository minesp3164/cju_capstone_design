const BackgroundTest = () =>{
  return (
    <div className="bg-[('/images/backgroundfile.png')] bg-cover bg-center h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">중앙에 흰색 배경 컨텐츠</h1>
        <p className="text-gray-600">
          배경 이미지를 설정한 뒤, 그 위에 흰색 배경을 가진 콘텐츠를 배치했습니다.
        </p>
      </div>
    </div>
  )
}

export default BackgroundTest;