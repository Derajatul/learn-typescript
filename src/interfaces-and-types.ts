// Write an interface here

// 1
interface Run {
  miles: number;
}

function updateRunGoal(run: Run) {
  console.log(`
  Miles left:       ${50 - run.miles}
  Percent of goal:  ${(run.miles / 50) * 100}% complete
    `);
}

updateRunGoal({
  miles: 5,
});

// 2
interface Directory {
  addFile: (name: string) => void;
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile("lesson-notes.txt");
Desktop.showPreview("lesson-notes.txt");

// 3
interface Directory2 {
  addFile: (name: string) => void;
  // Define a config type member here
  config: {
    default: {
      encoding: string;
      permissions: string;
    };
  };
}

class DesktopDirectory2 implements Directory2 {
  config = {
    default: {
      encoding: "utf-8",
      permissions: "drw-rw-rw-",
    },
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop2 = new DesktopDirectory2();

console.log(Desktop2.config);

// 4
interface Directory3 {
  addFile: (name: string) => void;
  config: Config;
}

interface Config {
  default: DefaultConfig;
}
interface DefaultConfig {
  encoding: string;
  permissions: string;
}

class DesktopDirectory3 implements Directory3 {
  config = {
    default: {
      encoding: "utf-8",
      permissions: "drw-rw-rw-",
    },
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop3 = new DesktopDirectory3();

console.log(Desktop3.config);

// 5
interface Developer extends Human {
  code: () => void;
}
interface Human {
  name: string;
  hobbies: string[];
}

// Add your interface here

const me: Developer = {
  code: () => console.log("Headphones on. Coffee brewed. Editor open."),
  name: "Corrina",
  hobbies: ["Building rockets"],
};

me.code();

// 6
// import { getBudgetAsync } from "./api";

// Write an interface here
interface Budget {
  [category: string]: number;
}

// async function getBudget() {
//   const result: Budget = await getBudgetAsync();
//   console.log(result);
// }

// getBudget();

// 7
// Write an interface here
interface UserNameOptions{
    firstName?: string;
    lastName?: string;
    username: string;
  }
  
  function getUserName(options: UserNameOptions) {
    if (options.firstName && options.lastName) {
      return console.log(`${options.firstName} ${options.lastName}`);
    }
  
    return console.log(options.username);
  }
  
  getUserName({
    firstName: 'Mr.',
    lastName: 'Oshiro',
    username: 'hotelowner304'
  })
  
  getUserName({
    firstName: 'Madeline',
    username: 'mountainClimber'
  })
