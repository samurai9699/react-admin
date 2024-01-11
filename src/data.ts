export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "/users/1",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "user.svg",
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: "product.svg",
        },
        {
          id: 3,
          title: "Orders",
          url: "/orders",
          icon: "order.svg",
        },
        {
          id: 4,
          title: "Posts",
          url: "/posts",
          icon: "post2.svg",
        },
      ],
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/",
          icon: "element.svg",
        },
        {
          id: 2,
          title: "Notes",
          url: "/",
          icon: "note.svg",
        },
        {
          id: 3,
          title: "Forms",
          url: "/",
          icon: "form.svg",
        },
        {
          id: 4,
          title: "Calendar",
          url: "/",
          icon: "calendar.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: "backup.svg",
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "chart.svg",
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "log.svg",
        },
      ],
    },
  ];
  
  export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=800",
      username: "Adeline Watson",
      email: "adeline@gmail.com",
      amount: "2.512",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=800",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      amount: "2.134",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3646160/pexels-photo-3646160.jpeg?auto=compress&cs=tinysrgb&w=800",
      username: "Augusta McGee",
      email: "augusta@gmail.com",
      amount: "1.932",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/7116213/pexels-photo-7116213.jpeg?auto=compress&cs=tinysrgb&w=800",
      username: "Angel Thomas",
      email: "angel@gmail.com",
      amount: "1.560",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=800",
      username: "Samantha Johnson",
      email: "samantha@gmail.com",
      amount: "2.310",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=800",
      username: "David Wilson",
      email: "david@gmail.com",
      amount: "3.820",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=800",
      username: "Emma Thompson",
      email: "emma@gmail.com",
      amount: "4.520",
    },
  ];
  
  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Cumulative user count",
    number: "15000",
    dataKey: "users",
    percentage: 55,
    chartData: [
      { name: "Sun", users: 200 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 300 },
      { name: "Wed", users: 50 },
      { name: "Thu", users: 700 },
      { name: "Fri", users: 800 },
      { name: "Sat", users: 1000 },
    ],
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Product Count",
    number: "400",
    dataKey: "products",
    percentage: -12,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 550 },
      { name: "Wed", products: 750 },
      { name: "Thu", products: 800 },
      { name: "Fri", products: 1000 },
      { name: "Sat", products: 700 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Revenue Sum",
    number: "$65.521",
    dataKey: "revenue",
    percentage: -6,
    chartData: [
      { name: "Sun", revenue: 50 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 700 },
      { name: "Wed", revenue: 400 },
      { name: "Thu", revenue: 900 },
      { name: "Fri", revenue: 1000 },
      { name: "Sat", revenue: 850 },
    ],
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Overall Ratio",
    number: "6.2",
    dataKey: "ratio",
    percentage: 42,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 550 },
      { name: "Wed", ratio: 720 },
      { name: "Thu", ratio: 100 },
      { name: "Fri", ratio: 400 },
      { name: "Sat", ratio: 700 },
    ],
  };
  
  export const barChartBoxRevenue = {
    title: "Earnings Yield",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 4000,
      },
      {
        name: "Mon",
        profit: 3000,
      },
      {
        name: "Tue",
        profit: 2000,
      },
      {
        name: "Wed",
        profit: 2780,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 2390,
      },
      {
        name: "Sat",
        profit: 3490,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Aggregate Visits",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 4000,
      },
      {
        name: "Mon",
        visit: 3000,
      },
      {
        name: "Tue",
        visit: 2000,
      },
      {
        name: "Wed",
        visit: 2780,
      },
      {
        name: "Thu",
        visit: 1890,
      },
      {
        name: "Fri",
        visit: 2390,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };
  
  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
        id: 16,
        img: "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Smith",
        firstName: "Emily",
        email: "emilysmith@gmail.com",
        phone: "987 654 321",
        createdAt: "02.02.2023"
      },
      {
        id: 17,
        img: "https://images.pexels.com/photos/6626882/pexels-photo-6626882.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Johnson",
        firstName: "Michael",
        email: "michaeljohnson@gmail.com",
        phone: "555 123 456",
        createdAt: "03.02.2023",
        verified: true,
      },
      {
        id: 18,
        img: "https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Williams",
        firstName: "Olivia",
        email: "oliviawilliams@gmail.com",
        phone: "111 222 333",
        createdAt: "04.02.2023",
        verified: true,
      },
      {
        id: 19,
        img: "https://images.pexels.com/photos/6943429/pexels-photo-6943429.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Brown",
        firstName: "James",
        email: "jamesbrown@gmail.com",
        phone: "999 888 777",
        createdAt: "05.02.2023"
      },
      {
        id: 20,
        img: "https://images.pexels.com/photos/7013617/pexels-photo-7013617.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Jones",
        firstName: "Emma",
        email: "emmajones@gmail.com",
        phone: "444 555 666",
        createdAt: "06.02.2023",
        verified: true,
      },
      {
        id: 21,
        img: "https://images.pexels.com/photos/7507786/pexels-photo-7507786.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Miller",
        firstName: "William",
        email: "williammiller@gmail.com",
        phone: "777 888 999",
        createdAt: "07.02.2023",
        verified: true,
      },
      {
        id: 22,
        img: "https://images.pexels.com/photos/5682847/pexels-photo-5682847.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Davis",
        firstName: "Sophia",
        email: "sophiadavis@gmail.com",
        phone: "222 333 444",
        createdAt: "08.02.2023"
      },
      {
        id: 23,
        img: "https://images.pexels.com/photos/6551763/pexels-photo-6551763.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Garcia",
        firstName: "Noah",
        email: "noahgarcia@gmail.com",
        phone: "666 777 888",
        createdAt: "09.02.2023"
      },
      {
        id: 24,
        img: "https://images.pexels.com/photos/5032023/pexels-photo-5032023.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Rodriguez",
        firstName: "Isabella",
        email: "isabellarodriguez@gmail.com",
        phone: "333 444 555",
        createdAt: "10.02.2023"
      },
      {
        id: 25,
        img: "https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Wilson",
        firstName: "Liam",
        email: "liamwilson@gmail.com",
        phone: "888 999 000",
        createdAt: "11.02.2023",
        verified: true,
      },
      {
        id: 26,
        img: "https://images.pexels.com/photos/5491144/pexels-photo-5491144.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Martinez",
        firstName: "Ava",
        email: "avamartinez@gmail.com",
        phone: "777 888 999",
        createdAt: "12.02.2023",
        verified: true,
      },
      {
        id: 27,
        img: "https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Anderson",
        firstName: "Henry",
        email: "henryanderson@gmail.com",
        phone: "222 333 444",
        createdAt: "13.02.2023",
        verified: true,
      },
      {
        id: 28,
        img: "https://images.pexels.com/photos/5850889/pexels-photo-5850889.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Taylor",
        firstName: "Charlotte",
        email: "charlottetaylor@gmail.com",
        phone: "666 777 888",
        createdAt: "14.02.2023",
        verified: true,
      },
      {
        id: 29,
        img: "https://images.pexels.com/photos/7654096/pexels-photo-7654096.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Thomas",
        firstName: "Benjamin",
        email: "benjaminthomas@gmail.com",
        phone: "111 222 333",
        createdAt: "15.02.2023"
      },
      {
        id: 30,
        img: "https://images.pexels.com/photos/6195663/pexels-photo-6195663.jpeg?auto=compress&cs=tinysrgb&w=800",
        lastName: "Hernandez",
        firstName: "Emily",
        email: "emilyhernandez@gmail.com",
        phone: "999 888 777",
        createdAt: "16.02.2023",
        verified: true,
      },  
  ];
  
  export const products = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/13189272/pexels-photo-13189272.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Playstation 5 Pro",
      color: "white",
      producer: "Sony",
      price: "$250.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    { 
      id: 2, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIVbHGs6wJixcYmp53yshkCwkDQKBu5e-LA&usqp=CAU", 
      title: "HP Laptop XYZ", 
      color: "silver", 
      producer: "HP", 
      price: "$699.99", 
      createdAt: "03.05.2023", 
      inStock: true, 
    },
    { 
      id: 3, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9XzCYEqlJ8zB86M2pWBnZAjmYAszaEJ8UA&usqp=CAU", 
      title: "Dell Laptop ABC", 
      color: "white", 
      producer: "Dell", 
      price: "$799.99", 
      createdAt: "07.11.2022", 
      inStock: true, 
    },
    { 
      id: 4, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_j9YkPVBd4owA2V8SZeMmccsvDeq2Z6qhQ&usqp=CAU", 
      title: "Lenovo Laptop XYZ-123", 
      color: "gray", 
      producer: "Lenovo", 
      price: "$649.99", 
      createdAt: "09.09.2022", 
      inStock: true, 
    },
    { 
      id: 5, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDOf3jz9bt-ViqCWpum6iMsQLsDVdZgvByQ&usqp=CAU", 
      title: "Apple MacBook Pro", 
      color: "silver", 
      producer: "Apple", 
      price: "$1299.99", 
      createdAt: "12.12.2022", 
      inStock: true, 
    },
    { 
      id: 6, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ549JprOCdEZD4VGh6iemO9gKWHh2pxEv25A&usqp=CAU", 
      title: "Asus Laptop 1234", 
      color: "blue", 
      producer: "Asus", 
      price: "$549.99", 
      createdAt: "04.04.2023", 
      inStock: true, 
    },
    { 
      id: 7, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMaEZ58YXYjL0yhCdYiYgJBeYsNN-6Z3qZQ&usqp=CAU", 
      title: "Samsung Notebook XYZ", 
      color: "silver", 
      producer: "Samsung", 
      price: "$799.99", 
      createdAt: "02.01.2023", 
      inStock: true, 
    },
    { 
      id: 8, 
      img: "data:image/jpeg;base64,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", 
      title: "Microsoft Surface Laptop", 
      color: "black", 
      producer: "Microsoft", 
      price: "$999.99", 
      createdAt: "06.07.2022", 
      inStock: true, 
    },
    { 
      id: 9, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O8U6romISQjBRyqbUswNvLAhh3X9fNPNpA&usqp=CAU", 
      title: "Toshiba Satellite XYZ", 
      color: "white",
      producer: "Toshiba", 
      price: "$599.99", 
      createdAt: "10.03.2023", 
      inStock: true, 
    },
    { 
      id: 10, 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9Qui5WaQsKCb-CtKQesNX0oKdOtxzIPTsg&usqp=CAU", 
      title: "Sony VAIO Pro", 
      color: "silver", 
      producer: "Sony", 
      price: "$899.99", 
      createdAt: "08.08.2022", 
      inStock: true, 
    },
  ];
  
  
  
  export const singleUser = {
    id: 1,
    title: "Alchemy Sam",
    img: "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: {
      username: "Alchemy27",
      fullname: "Alchemy Sam",
      email: "alchemy@gmail.com",
      phone: "122 756 089",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 7400,
        },
        {
          name: "Mon",
          visits: 4000,
          clicks: 4398,
        },
        {
          name: "Tue",
          visits: 5000,
          clicks: 1800,
        },
        {
          name: "Wed",
          visits: 6780,
          clicks: 1908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 3390,
          clicks: 5800,
        },
        {
          name: "Sat",
          visits: 1490,
          clicks: 6300,
        },
      ],
    },
    activities: [
      {
        text: "Alchemy Sam procured a Playstation 5 Pro",
        time: "3 day ago",
      },
      {
        text: "Alchemy Sam added 6 items into their Must-Haves",
        time: "1 week ago",
      },
      {
        text: "Alchemy Sam got his hands on a Samsung Odessy Ark",
        time: "2 weeks ago",
      },
      {
        text: "Alchemy Sam added his insights on a product",
        time: "1 month ago",
      },
      {
        text: "Alchemy Sam added 4 items into their Desired items",
        time: "1 month ago",
      },
      {
        text: "Alchemy Sam gave a product review",
        time: "2 months ago",
      },
    ],
  };
  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Pro",
    img: "https://images.pexels.com/photos/13189272/pexels-photo-13189272.jpeg?auto=compress&cs=tinysrgb&w=800",
    info: {
      productId: "Ps5SQG324z",
      color: "white",
      price: "$500.99",
      producer: "Sony",
      export: "Japan",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 1000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 1800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 3390,
          orders: 1800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 1300,
        },
      ],
    },
    activities: [
      {
        text: "Alchemy Sam purchased Playstation 5 Pro",
        time: "5 days ago",
      },
      {
        text: "Alchemy Sam added Playstation 5 Pro into their wishlist",
        time: "2 weeks ago",
      },
      {
        text: "David Alchemy purchased Playstation 5 Pro",
        time: "3 weeks ago",
      },
      {
        text: "Ella Alchemy reviewed the product",
        time: "1 month ago",
      },
      {
        text: "David Alchemy added Playstation 5 Digital Edition into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Emma Alchemy reviewed the product",
        time: "2 months ago",
      },
    ],
  };