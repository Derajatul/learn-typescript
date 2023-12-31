// variabel yang memiliki lebih dari 2 tipe data atau lebih

// 1
function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings("hello!");
printNumsAndStrings(20);

// 2
type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: "nikko" };
  } else {
    return "Could not create a user.";
  }
}

const userData: string | User = createUser();

// 3
function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  '123 Main St',
  226800,
  '580 Broadway Apt 4a',
  337900,
]);

console.log(result);


// 4
type Status = 'idle' | 'downloading' | 'complete';

function downloadStatus(status: Status){
  if(status === 'idle'){
    console.log('Download')
  } else if('downloading'){
    console.log('Downloading...')
  } else if('complete'){
    console.log('Your download is complete!')
  }
}

downloadStatus('complete')