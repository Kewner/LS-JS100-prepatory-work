// Similar to the previous exercise, now write a function that extracts the
// region code from a locale. For example:

function extractRegion(string) {
  return string.slice(3, 5);
  // return string.substring(3, 5);
  // return string.split('_')[1].slice(0, 2);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

// LS solution
function extractRegionn(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

extractRegionn('en_US.UTF-8');  // 'US'
extractRegionn('en_GB.UTF-8');  // 'GB'
extractRegionn('ko_KR.UTF-16'); // 'KR'