export const downloadAPK = () => {
  // For now, we'll use a placeholder
  // Replace with your actual APK URL later
  const apkUrl = '/MovieRoom.apk'
  const link = document.createElement('a')
  link.href = apkUrl
  link.download = 'MovieRoom.apk'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // You can add analytics here later
  console.log('Download started!')
}