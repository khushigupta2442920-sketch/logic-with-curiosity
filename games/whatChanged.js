

const whatChangeQuestions = {
    easy: [
        {
            before: ["🍎 Apple", "🐱 Cat", "🚗 Car", "🌸 Flower", "⭐ Star"],
            after: ["🍎 Apple", "🐱 Cat", "🚗 Car", "🌸 Flower", "🌙 Moon"],
            answer: 5
        },
        {
            before: ["🐶 Dog", "🍕 Pizza", "⚽ Ball", "🌳 Tree", "🚲 Cycle"],
            after: ["🐶 Dog", "🍔 Burger", "⚽ Ball", "🌳 Tree", "🚲 Cycle"],
            answer: 2
        },
        {
            before: ["🔴 Red", "🔵 Blue", "🟢 Green", "🟡 Yellow", "🟣 Purple"],
            after: ["🔴 Red", "🔵 Blue", "🟠 Orange", "🟡 Yellow", "🟣 Purple"],
            answer: 3
        },
        {
            before: ["🐼 Panda", "🦁 Lion", "🐯 Tiger", "🐘 Elephant", "🐵 Monkey"],
            after: ["🐼 Panda", "🦁 Lion", "🐯 Tiger", "🦒 Giraffe", "🐵 Monkey"],
            answer: 4
        },
        {
            before: ["📱 Mobile", "💻 Laptop", "⌚ Watch", "🎧 Headphone", "📷 Camera"],
            after: ["📱 Mobile", "💻 Laptop", "⌚ Watch", "🎧 Headphone", "🎮 Game"],
            answer: 5
        },
        {
            before: ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange", "🥭 Mango"],
            after: ["🍎 Apple", "🍌 Banana", "🍉 Watermelon", "🍊 Orange", "🥭 Mango"],
            answer: 3
        },
        {
            before: ["🚗 Car", "🚌 Bus", "🚲 Cycle", "✈️ Plane", "🚆 Train"],
            after: ["🚗 Car", "🚌 Bus", "🛵 Scooter", "✈️ Plane", "🚆 Train"],
            answer: 3
        },
        {
            before: ["⚽ Football", "🏏 Cricket", "🏀 Basketball", "🎾 Tennis", "🏐 Volleyball"],
            after: ["⚽ Football", "🏏 Cricket", "🏀 Basketball", "🏸 Badminton", "🏐 Volleyball"],
            answer: 4
        },
        {
            before: ["☀️ Sun", "🌙 Moon", "⭐ Star", "☁️ Cloud", "🌈 Rainbow"],
            after: ["☀️ Sun", "🌙 Moon", "⭐ Star", "🌧️ Rain", "🌈 Rainbow"],
            answer: 4
        },
        {
            before: ["😀 Happy", "😢 Sad", "😡 Angry", "😴 Sleepy", "😂 Funny"],
            after: ["😀 Happy", "😢 Sad", "😡 Angry", "🤔 Thinking", "😂 Funny"],
            answer: 4
        },
        {
            before: ["1️⃣ One", "2️⃣ Two", "3️⃣ Three", "4️⃣ Four", "5️⃣ Five"],
            after: ["1️⃣ One", "2️⃣ Two", "8️⃣ Eight", "4️⃣ Four", "5️⃣ Five"],
            answer: 3
        },
        {
            before: ["🌹 Rose", "🌻 Sunflower", "🌷 Tulip", "🌼 Daisy", "🌺 Hibiscus"],
            after: ["🌹 Rose", "🌻 Sunflower", "🌷 Tulip", "🌼 Daisy", "🌸 Cherry Blossom"],
            answer: 5
        },
        {
            before: ["✏️ Pencil", "📕 Book", "📏 Ruler", "✂️ Scissors", "🖊️ Pen"],
            after: ["✏️ Pencil", "📕 Book", "📐 Triangle", "✂️ Scissors", "🖊️ Pen"],
            answer: 3
        },
        {
            before: ["🥛 Milk", "🧃 Juice", "💧 Water", "☕ Tea", "🥤 Soda"],
            after: ["🥛 Milk", "🧃 Juice", "💧 Water", "☕ Tea", "🍵 Coffee"],
            answer: 5
        },
        {
            before: ["🏠 House", "🏫 School", "🏥 Hospital", "🏪 Shop", "🏦 Bank"],
            after: ["🏠 House", "🏫 School", "🏥 Hospital", "🏬 Mall", "🏦 Bank"],
            answer: 4
        },
        {
            before: ["🐟 Fish", "🐦 Bird", "🐰 Rabbit", "🐴 Horse", "🐢 Turtle"],
            after: ["🐟 Fish", "🦅 Eagle", "🐰 Rabbit", "🐴 Horse", "🐢 Turtle"],
            answer: 2
        },
        {
            before: ["🍰 Cake", "🍪 Cookie", "🍩 Donut", "🍫 Chocolate", "🍬 Candy"],
            after: ["🍰 Cake", "🍪 Cookie", "🥐 Croissant", "🍫 Chocolate", "🍬 Candy"],
            answer: 3
        },
        {
            before: ["🔑 Key", "🔒 Lock", "📦 Box", "🎁 Gift", "👜 Bag"],
            after: ["🔑 Key", "🔒 Lock", "📦 Box", "🎀 Ribbon", "👜 Bag"],
            answer: 4
        },
        {
            before: ["🟥 Red", "🟦 Blue", "🟩 Green", "🟨 Yellow", "⬛ Black"],
            after: ["🟥 Red", "🟦 Blue", "🟩 Green", "🟧 Orange", "⬛ Black"],
            answer: 4
        },
        {
            before: ["🌞 Sunny", "🌧️ Rainy", "❄️ Snowy", "🌪️ Windy", "☁️ Cloudy"],
            after: ["🌞 Sunny", "🌧️ Rainy", "❄️ Snowy", "🌈 Rainbow", "☁️ Cloudy"],
            answer: 4
        },
        {
            before: ["👕 Shirt", "👖 Pants", "👟 Shoes", "🧢 Cap", "🧥 Jacket"],
            after: ["👕 Shirt", "👖 Pants", "👢 Boots", "🧢 Cap", "🧥 Jacket"],
            answer: 3
        },
        {
            before: ["🚲 Cycle", "🛵 Scooter", "🏍️ Bike", "🚗 Car", "🚌 Bus"],
            after: ["🚲 Cycle", "🛵 Scooter", "🏍️ Bike", "🚕 Taxi", "🚌 Bus"],
            answer: 4
        },
        {
            before: ["🐶 Dog", "🐱 Cat", "🐹 Hamster", "🐰 Rabbit", "🐭 Mouse"],
            after: ["🐶 Dog", "🐱 Cat", "🦜 Parrot", "🐰 Rabbit", "🐭 Mouse"],
            answer: 3
        },
        {
            before: ["📺 TV", "📻 Radio", "📱 Phone", "💻 Computer", "🎮 Game"],
            after: ["📺 TV", "📻 Radio", "📱 Phone", "⌨️ Keyboard", "🎮 Game"],
            answer: 4
        },
        {
            before: ["🥕 Carrot", "🥔 Potato", "🍅 Tomato", "🌽 Corn", "🥒 Cucumber"],
            after: ["🥕 Carrot", "🥔 Potato", "🍅 Tomato", "🌽 Corn", "🥦 Broccoli"],
            answer: 5
        },
        {
            before: ["🦁 Lion", "🐯 Tiger", "🐆 Leopard", "🐺 Wolf", "🦊 Fox"],
            after: ["🦁 Lion", "🐯 Tiger", "🐆 Leopard", "🐻 Bear", "🦊 Fox"],
            answer: 4
        },
        {
            before: ["🎸 Guitar", "🎹 Piano", "🥁 Drum", "🎺 Trumpet", "🎻 Violin"],
            after: ["🎸 Guitar", "🎹 Piano", "🥁 Drum", "🎷 Saxophone", "🎻 Violin"],
            answer: 4
        },
        {
            before: ["⚽ Ball", "🏀 Basketball", "🏈 Rugby", "⚾ Baseball", "🎾 Tennis"],
            after: ["⚽ Ball", "🏀 Basketball", "🏈 Rugby", "🏐 Volleyball", "🎾 Tennis"],
            answer: 4
        },
        {
            before: ["🌳 Tree", "🌴 Palm", "🌲 Pine", "🎋 Bamboo", "🌵 Cactus"],
            after: ["🌳 Tree", "🌴 Palm", "🌲 Pine", "🎋 Bamboo", "🌿 Plant"],
            answer: 5
        },
        {
            before: ["🍉 Watermelon", "🍓 Strawberry", "🍒 Cherry", "🍍 Pineapple", "🥝 Kiwi"],
            after: ["🍉 Watermelon", "🍓 Strawberry", "🍒 Cherry", "🍑 Peach", "🥝 Kiwi"],
            answer: 4
        }
    ],

    medium: [
        {
            before: ["🚗 Car", "🌳 Tree", "🐶 Dog", "📚 Books", "☀️ Sun", "⚽ Ball"],
            after: ["🚗 Car", "🌳 Tree", "🐶 Dog", "📚 Books", "🌙 Moon", "⚽ Ball"],
            answer: 5
        },
        {
            before: ["🍎 Apple", "🐱 Cat", "🏠 House", "🚲 Cycle", "⭐ Star", "🎈 Balloon"],
            after: ["🍎 Apple", "🐱 Cat", "🏠 House", "🛵 Scooter", "⭐ Star", "🎈 Balloon"],
            answer: 4
        },
        {
            before: ["🔴 Red", "🔵 Blue", "🟢 Green", "🟡 Yellow", "🟣 Purple", "🟠 Orange"],
            after: ["🔴 Red", "🔵 Blue", "🟢 Green", "🟤 Brown", "🟣 Purple", "🟠 Orange"],
            answer: 4
        },
        {
            before: ["🐶 Dog", "🐱 Cat", "🐭 Mouse", "🐹 Hamster", "🐰 Rabbit", "🦊 Fox"],
            after: ["🐶 Dog", "🐱 Cat", "🐭 Mouse", "🐹 Hamster", "🦌 Deer", "🦊 Fox"],
            answer: 5
        },
        {
            before: ["📱 Phone", "💻 Laptop", "⌚ Watch", "📷 Camera", "🎧 Headphone", "🎮 Game"],
            after: ["📱 Phone", "💻 Laptop", "⌛ Hourglass", "📷 Camera", "🎧 Headphone", "🎮 Game"],
            answer: 3
        },
        {
            before: ["🌞 Sun", "🌙 Moon", "⭐ Star", "☁️ Cloud", "🌈 Rainbow", "🌧️ Rain"],
            after: ["🌞 Sun", "🌙 Moon", "⭐ Star", "☁️ Cloud", "❄️ Snow", "🌧️ Rain"],
            answer: 5
        },
        {
            before: ["🍕 Pizza", "🍔 Burger", "🌭 Hotdog", "🍟 Fries", "🌮 Taco", "🍿 Popcorn"],
            after: ["🍕 Pizza", "🍔 Burger", "🌭 Hotdog", "🍟 Fries", "🥪 Sandwich", "🍿 Popcorn"],
            answer: 5
        },
        {
            before: ["🏏 Cricket", "⚽ Football", "🏀 Basketball", "🎾 Tennis", "🏐 Volleyball", "🏸 Badminton"],
            after: ["🏏 Cricket", "⚽ Football", "🏀 Basketball", "🥊 Boxing", "🏐 Volleyball", "🏸 Badminton"],
            answer: 4
        },
        {
            before: ["🌹 Rose", "🌷 Tulip", "🌻 Sunflower", "🌼 Daisy", "🌺 Hibiscus", "💐 Bouquet"],
            after: ["🌹 Rose", "🌷 Tulip", "🌻 Sunflower", "🌼 Daisy", "🌸 Cherry Blossom", "💐 Bouquet"],
            answer: 5
        },
        {
            before: ["✏️ Pencil", "🖊️ Pen", "📏 Ruler", "📐 Set Square", "✂️ Scissors", "📚 Book"],
            after: ["✏️ Pencil", "🖊️ Pen", "📏 Ruler", "📐 Set Square", "📌 Pin", "📚 Book"],
            answer: 5
        },
        {
            before: ["🏠 House", "🏫 School", "🏥 Hospital", "🏦 Bank", "🏪 Shop", "🏨 Hotel"],
            after: ["🏠 House", "🏫 School", "🏥 Hospital", "🏦 Bank", "🏬 Mall", "🏨 Hotel"],
            answer: 5
        },
        {
            before: ["🚆 Train", "✈️ Plane", "🚢 Ship", "🚗 Car", "🚌 Bus", "🚲 Cycle"],
            after: ["🚆 Train", "✈️ Plane", "🚢 Ship", "🚗 Car", "🚕 Taxi", "🚲 Cycle"],
            answer: 5
        },
        {
            before: ["🥭 Mango", "🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange", "🍉 Watermelon"],
            after: ["🥭 Mango", "🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍐 Pear", "🍉 Watermelon"],
            answer: 5
        },
        {
            before: ["🐘 Elephant", "🦁 Lion", "🐯 Tiger", "🦒 Giraffe", "🦓 Zebra", "🦏 Rhino"],
            after: ["🐘 Elephant", "🦁 Lion", "🐯 Tiger", "🦒 Giraffe", "🦓 Zebra", "🦛 Hippo"],
            answer: 6
        },
        {
            before: ["🎸 Guitar", "🎹 Piano", "🎻 Violin", "🥁 Drum", "🎺 Trumpet", "🎷 Saxophone"],
            after: ["🎸 Guitar", "🎹 Piano", "🎻 Violin", "🥁 Drum", "🎺 Trumpet", "🪕 Banjo"],
            answer: 6
        },
        {
            before: ["☕ Tea", "🥛 Milk", "🧃 Juice", "💧 Water", "🥤 Soda", "🍵 Coffee"],
            after: ["☕ Tea", "🥛 Milk", "🧃 Juice", "💧 Water", "🥤 Soda", "🍋 Lemonade"],
            answer: 6
        },
        {
            before: ["🟥 Square", "🔵 Circle", "🔺 Triangle", "⬛ Rectangle", "⭐ Star", "💎 Diamond"],
            after: ["🟥 Square", "🔵 Circle", "🔺 Triangle", "⬛ Rectangle", "❤️ Heart", "💎 Diamond"],
            answer: 5
        },
        {
            before: ["1️⃣ One", "2️⃣ Two", "3️⃣ Three", "4️⃣ Four", "5️⃣ Five", "6️⃣ Six"],
            after: ["1️⃣ One", "2️⃣ Two", "3️⃣ Three", "4️⃣ Four", "7️⃣ Seven", "6️⃣ Six"],
            answer: 5
        },
        {
            before: ["🌳 Tree", "🌲 Pine", "🌴 Palm", "🌵 Cactus", "🎋 Bamboo", "🌿 Plant"],
            after: ["🌳 Tree", "🌲 Pine", "🌴 Palm", "🌵 Cactus", "🍀 Clover", "🌿 Plant"],
            answer: 5
        },
        {
            before: ["👕 Shirt", "👖 Pants", "👟 Shoes", "🧢 Cap", "🧥 Jacket", "🧦 Socks"],
            after: ["👕 Shirt", "👖 Pants", "👟 Shoes", "🧢 Cap", "🧣 Scarf", "🧦 Socks"],
            answer: 5
        },
        {
            before: ["📺 TV", "📻 Radio", "💻 Computer", "📱 Phone", "⌨️ Keyboard", "🖱️ Mouse"],
            after: ["📺 TV", "📻 Radio", "💻 Computer", "📱 Phone", "⌨️ Keyboard", "🖨️ Printer"],
            answer: 6
        },
        {
            before: ["🐟 Fish", "🐬 Dolphin", "🦈 Shark", "🐳 Whale", "🐙 Octopus", "🦀 Crab"],
            after: ["🐟 Fish", "🐬 Dolphin", "🦈 Shark", "🐳 Whale", "🦑 Squid", "🦀 Crab"],
            answer: 5
        },
        {
            before: ["🍰 Cake", "🍪 Cookie", "🍩 Donut", "🧁 Cupcake", "🍫 Chocolate", "🍬 Candy"],
            after: ["🍰 Cake", "🍪 Cookie", "🍩 Donut", "🧁 Cupcake", "🍫 Chocolate", "🍭 Lollipop"],
            answer: 6
        },
        {
            before: ["🔑 Key", "🔒 Lock", "📦 Box", "🎁 Gift", "👜 Bag", "🎒 Backpack"],
            after: ["🔑 Key", "🔒 Lock", "📦 Box", "🎁 Gift", "🧳 Suitcase", "🎒 Backpack"],
            answer: 5
        },
        {
            before: ["🚀 Rocket", "✈️ Plane", "🚁 Helicopter", "🛩️ Aircraft", "🛸 UFO", "🎈 Balloon"],
            after: ["🚀 Rocket", "✈️ Plane", "🚁 Helicopter", "🛩️ Aircraft", "🛸 UFO", "🪂 Parachute"],
            answer: 6
        },
        {
            before: ["🥕 Carrot", "🥔 Potato", "🌽 Corn", "🥒 Cucumber", "🍅 Tomato", "🥦 Broccoli"],
            after: ["🥕 Carrot", "🥔 Potato", "🌽 Corn", "🥒 Cucumber", "🍅 Tomato", "🥬 Lettuce"],
            answer: 6
        },
        {
            before: ["🦁 Lion", "🐯 Tiger", "🐆 Leopard", "🐺 Wolf", "🦊 Fox", "🐻 Bear"],
            after: ["🦁 Lion", "🐯 Tiger", "🐆 Leopard", "🐺 Wolf", "🦊 Fox", "🐼 Panda"],
            answer: 6
        },
        {
            before: ["🎮 Game", "🎲 Dice", "🧩 Puzzle", "♟️ Chess", "🃏 Cards", "🎯 Dart"],
            after: ["🎮 Game", "🎲 Dice", "🧩 Puzzle", "♟️ Chess", "🃏 Cards", "🏓 Ping Pong"],
            answer: 6
        },
        {
            before: ["🌍 Earth", "🌙 Moon", "☀️ Sun", "⭐ Star", "🪐 Planet", "☄️ Comet"],
            after: ["🌍 Earth", "🌙 Moon", "☀️ Sun", "⭐ Star", "🪐 Planet", "🌌 Galaxy"],
            answer: 6
        },
        {
            before: ["😀 Happy", "😢 Sad", "😡 Angry", "😴 Sleepy", "😎 Cool", "🤔 Thinking"],
            after: ["😀 Happy", "😢 Sad", "😡 Angry", "😴 Sleepy", "🥳 Excited", "🤔 Thinking"],
            answer: 5
        }
    ],

    hard: [
        {
            before: ["🔴 Red", "🔵 Blue", "🟢 Green", "🟡 Yellow", "🟣 Purple", "🟠 Orange", "🟤 Brown"],
            after: ["🔴 Red", "🔵 Blue", "🟢 Green", "🟡 Yellow", "🟣 Purple", "⚫ Black", "🟤 Brown"],
            answer: 6
        },
        {
            before: ["🐶 Dog", "🐱 Cat", "🐭 Mouse", "🐹 Hamster", "🐰 Rabbit", "🦊 Fox", "🐻 Bear"],
            after: ["🐶 Dog", "🐱 Cat", "🐭 Mouse", "🐹 Hamster", "🐰 Rabbit", "🦌 Deer", "🐻 Bear"],
            answer: 6
        },
        {
            before: ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange", "🥭 Mango", "🍉 Watermelon", "🍍 Pineapple"],
            after: ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange", "🥭 Mango", "🍑 Peach", "🍍 Pineapple"],
            answer: 6
        },
        {
            before: ["🚗 Car", "🚌 Bus", "🚆 Train", "✈️ Plane", "🚢 Ship", "🚲 Cycle", "🏍️ Bike"],
            after: ["🚗 Car", "🚌 Bus", "🚆 Train", "✈️ Plane", "🚢 Ship", "🚕 Taxi", "🏍️ Bike"],
            answer: 6
        },
        {
            before: ["🌞 Sun", "🌙 Moon", "⭐ Star", "☁️ Cloud", "🌧️ Rain", "❄️ Snow", "🌈 Rainbow"],
            after: ["🌞 Sun", "🌙 Moon", "⭐ Star", "☁️ Cloud", "🌧️ Rain", "🌪️ Storm", "🌈 Rainbow"],
            answer: 6
        },
        {
            before: ["⚽ Football", "🏀 Basketball", "🏏 Cricket", "🎾 Tennis", "🏐 Volleyball", "🏸 Badminton", "🥊 Boxing"],
            after: ["⚽ Football", "🏀 Basketball", "🏏 Cricket", "🎾 Tennis", "🏐 Volleyball", "🏸 Badminton", "🥋 Karate"],
            answer: 7
        },
        {
            before: ["📱 Phone", "💻 Laptop", "⌚ Watch", "📷 Camera", "🎧 Headphone", "🎮 Console", "🖨️ Printer"],
            after: ["📱 Phone", "💻 Laptop", "⌚ Watch", "📷 Camera", "🎧 Headphone", "🕹️ Joystick", "🖨️ Printer"],
            answer: 6
        },
        {
            before: ["🌹 Rose", "🌷 Tulip", "🌻 Sunflower", "🌼 Daisy", "🌺 Hibiscus", "🌸 Blossom", "💐 Bouquet"],
            after: ["🌹 Rose", "🌷 Tulip", "🌻 Sunflower", "🌼 Daisy", "🌺 Hibiscus", "🌵 Cactus", "💐 Bouquet"],
            answer: 6
        },
        {
            before: ["🐘 Elephant", "🦁 Lion", "🐯 Tiger", "🦒 Giraffe", "🦓 Zebra", "🦏 Rhino", "🦛 Hippo"],
            after: ["🐘 Elephant", "🦁 Lion", "🐯 Tiger", "🦒 Giraffe", "🦓 Zebra", "🐊 Crocodile", "🦛 Hippo"],
            answer: 6
        },
        {
            before: ["🎸 Guitar", "🎹 Piano", "🥁 Drum", "🎺 Trumpet", "🎻 Violin", "🎷 Saxophone", "🪕 Banjo"],
            after: ["🎸 Guitar", "🎹 Piano", "🥁 Drum", "🎺 Trumpet", "🎻 Violin", "🎷 Saxophone", "🪈 Flute"],
            answer: 7
        },
        {
            before: ["🏠 House", "🏫 School", "🏥 Hospital", "🏦 Bank", "🏨 Hotel", "🏪 Shop", "🏭 Factory"],
            after: ["🏠 House", "🏫 School", "🏥 Hospital", "🏦 Bank", "🏨 Hotel", "🏬 Mall", "🏭 Factory"],
            answer: 6
        },
        {
            before: ["✏️ Pencil", "🖊️ Pen", "📏 Ruler", "📐 Triangle", "✂️ Scissors", "📚 Book", "📌 Pin"],
            after: ["✏️ Pencil", "🖊️ Pen", "📏 Ruler", "📐 Triangle", "🪚 Saw", "📚 Book", "📌 Pin"],
            answer: 5
        },
        {
            before: ["🥕 Carrot", "🥔 Potato", "🌽 Corn", "🥒 Cucumber", "🍅 Tomato", "🥦 Broccoli", "🥬 Lettuce"],
            after: ["🥕 Carrot", "🥔 Potato", "🌽 Corn", "🥒 Cucumber", "🍅 Tomato", "🥦 Broccoli", "🫛 Peas"],
            answer: 7
        },
        {
            before: ["🌳 Tree", "🌲 Pine", "🌴 Palm", "🌵 Cactus", "🎋 Bamboo", "🍀 Clover", "🌿 Plant"],
            after: ["🌳 Tree", "🌲 Pine", "🌴 Palm", "🌵 Cactus", "🎋 Bamboo", "🌾 Wheat", "🌿 Plant"],
            answer: 6
        },
        {
            before: ["🟥 Square", "🔵 Circle", "🔺 Triangle", "⬛ Rectangle", "⭐ Star", "💎 Diamond", "❤️ Heart"],
            after: ["🟥 Square", "🔵 Circle", "🔺 Triangle", "⬛ Rectangle", "⭐ Star", "🔷 Hexagon", "❤️ Heart"],
            answer: 6
        },
        {
            before: ["1️⃣ One", "2️⃣ Two", "3️⃣ Three", "4️⃣ Four", "5️⃣ Five", "6️⃣ Six", "7️⃣ Seven"],
            after: ["1️⃣ One", "2️⃣ Two", "3️⃣ Three", "4️⃣ Four", "8️⃣ Eight", "6️⃣ Six", "7️⃣ Seven"],
            answer: 5
        },
        {
            before: ["😀 Happy", "😢 Sad", "😡 Angry", "😴 Sleepy", "😎 Cool", "🤔 Thinking", "😂 Laughing"],
            after: ["😀 Happy", "😢 Sad", "😡 Angry", "😴 Sleepy", "🥰 Loving", "🤔 Thinking", "😂 Laughing"],
            answer: 5
        },
        {
            before: ["🔑 Key", "🔒 Lock", "📦 Box", "🎁 Gift", "👜 Bag", "🎒 Backpack", "🧳 Suitcase"],
            after: ["🔑 Key", "🔒 Lock", "📦 Box", "🎁 Gift", "👜 Bag", "💼 Briefcase", "🧳 Suitcase"],
            answer: 6
        },
        {
            before: ["🍕 Pizza", "🍔 Burger", "🌭 Hotdog", "🍟 Fries", "🌮 Taco", "🥪 Sandwich", "🍿 Popcorn"],
            after: ["🍕 Pizza", "🍔 Burger", "🌭 Hotdog", "🍟 Fries", "🌮 Taco", "🥗 Salad", "🍿 Popcorn"],
            answer: 6
        },
        {
            before: ["🐟 Fish", "🐬 Dolphin", "🦈 Shark", "🐳 Whale", "🐙 Octopus", "🦀 Crab", "🦑 Squid"],
            after: ["🐟 Fish", "🐬 Dolphin", "🦈 Shark", "🐳 Whale", "🐙 Octopus", "🦞 Lobster", "🦑 Squid"],
            answer: 6
        },
        {
            before: ["🚀 Rocket", "✈️ Plane", "🚁 Helicopter", "🛩️ Aircraft", "🛸 UFO", "🎈 Balloon", "🪂 Parachute"],
            after: ["🚀 Rocket", "✈️ Plane", "🚁 Helicopter", "🛩️ Aircraft", "🛸 UFO", "🎈 Balloon", "🪁 Kite"],
            answer: 7
        },
        {
            before: ["🎮 Game", "🎲 Dice", "🧩 Puzzle", "♟️ Chess", "🃏 Cards", "🎯 Dart", "🎳 Bowling"],
            after: ["🎮 Game", "🎲 Dice", "🧩 Puzzle", "♟️ Chess", "🃏 Cards", "🏹 Archery", "🎳 Bowling"],
            answer: 6
        },
        {
            before: ["🌍 Earth", "🌙 Moon", "☀️ Sun", "⭐ Star", "🪐 Planet", "☄️ Comet", "🌌 Galaxy"],
            after: ["🌍 Earth", "🌙 Moon", "☀️ Sun", "⭐ Star", "🪐 Planet", "🛰️ Satellite", "🌌 Galaxy"],
            answer: 6
        },
        {
            before: ["👕 Shirt", "👖 Pants", "👟 Shoes", "🧢 Cap", "🧥 Jacket", "🧦 Socks", "🧣 Scarf"],
            after: ["👕 Shirt", "👖 Pants", "👟 Shoes", "🧢 Cap", "🧥 Jacket", "🧤 Gloves", "🧣 Scarf"],
            answer: 6
        },
        {
            before: ["☕ Tea", "🥛 Milk", "🧃 Juice", "💧 Water", "🥤 Soda", "🍵 Coffee", "🍋 Lemonade"],
            after: ["☕ Tea", "🥛 Milk", "🧃 Juice", "💧 Water", "🥤 Soda", "🍵 Coffee", "🥥 Coconut Water"],
            answer: 7
        },
        {
            before: ["🍰 Cake", "🍪 Cookie", "🍩 Donut", "🧁 Cupcake", "🍫 Chocolate", "🍬 Candy", "🍭 Lollipop"],
            after: ["🍰 Cake", "🍪 Cookie", "🍩 Donut", "🥨 Pretzel", "🍫 Chocolate", "🍬 Candy", "🍭 Lollipop"],
            answer: 4
        },
        {
            before: ["🦁 Lion", "🐯 Tiger", "🐆 Leopard", "🐺 Wolf", "🦊 Fox", "🐻 Bear", "🐼 Panda"],
            after: ["🦁 Lion", "🐯 Tiger", "🐆 Leopard", "🐺 Wolf", "🦊 Fox", "🦒 Giraffe", "🐼 Panda"],
            answer: 6
        },
        {
            before: ["📺 TV", "📻 Radio", "💻 Computer", "📱 Phone", "⌨️ Keyboard", "🖱️ Mouse", "🖨️ Printer"],
            after: ["📺 TV", "📻 Radio", "💻 Computer", "📱 Phone", "⌨️ Keyboard", "🖱️ Mouse", "📠 Fax"],
            answer: 7
        },
        {
            before: ["⚽ Football", "🏀 Basketball", "🏏 Cricket", "🎾 Tennis", "🏐 Volleyball", "🏸 Badminton", "🏓 Table Tennis"],
            after: ["⚽ Football", "🏀 Basketball", "🏏 Cricket", "🎾 Tennis", "🏐 Volleyball", "🥋 Judo", "🏓 Table Tennis"],
            answer: 6
        },
        {
            before: ["🌞 Sun", "🌙 Moon", "⭐ Star", "☁️ Cloud", "🌧️ Rain", "❄️ Snow", "🌈 Rainbow"],
            after: ["🌞 Sun", "🌙 Moon", "⭐ Star", "☁️ Cloud", "🌧️ Rain", "🌋 Volcano", "🌈 Rainbow"],
            answer: 6
        }
    ]
};


// ============================================
// START WHAT CHANGED GAME
// ============================================

export function startWhatChanged() {

    const gameContent =
        document.getElementById("gameContent");

    if (!gameContent) {
        console.error("gameContent nahi mila.");
        return;
    }

    let difficulty = "easy";
    let currentQuestion = 0;
    let score = 0;
    let answered = false;


    // ============================================
    // RENDER GAME
    // ============================================

    function render() {

        const questions =
            whatChangeQuestions[difficulty];

        const question =
            questions[currentQuestion];


        // ========================================
        // GAME COMPLETE
        // ========================================

        if (!question) {

            const percentage =
                Math.round(
                    (score / questions.length) * 100
                );


            let message = "Good Job! 👍";

            if (percentage === 100) {
                message = "Perfect! 🏆🔥";
            }

            else if (percentage >= 70) {
                message = "Bahut Badhiya! 🎉";
            }

            else if (percentage >= 40) {
                message = "Nice Try! 😄";
            }

            else {
                message = "Practice Karo! 💪";
            }


            gameContent.innerHTML = `

                <div class="wc-wrapper">

                    <div class="wc-result-card">

                        <div class="wc-result-icon">
                            👀
                        </div>

                        <h1>
                            Game Complete!
                        </h1>

                        <p class="wc-result-message">
                            ${message}
                        </p>

                        <div class="wc-final-score">

                            <span>
                                Your Score
                            </span>

                            <strong>
                                ${score}
                                /
                                ${questions.length}
                            </strong>

                            <small>
                                ${percentage}% Correct
                            </small>

                        </div>


                        <div class="wc-result-actions">

                            <button
                                id="wcPlayAgain"
                                class="wc-primary-btn"
                            >
                                🔄 Play Again
                            </button>


                            <button
                                id="wcChangeLevel"
                                class="wc-secondary-btn"
                            >
                                🎯 Change Level
                            </button>

                        </div>

                    </div>

                </div>

            `;


            document
                .getElementById("wcPlayAgain")
                .onclick = () => {

                    currentQuestion = 0;
                    score = 0;
                    answered = false;

                    render();
                };


            document
                .getElementById("wcChangeLevel")
                .onclick = () => {

                    currentQuestion = 0;
                    score = 0;
                    answered = false;

                    showLevelScreen();
                };


            return;
        }


        // ========================================
        // GAME SCREEN
        // ========================================

        gameContent.innerHTML = `

            <div class="wc-wrapper">

                <div class="what-changed-game">


                    <!-- HEADER -->

                    <div class="wc-header">

                        <button
                            id="wcBack"
                            class="wc-back-btn"
                        >
                            ← Back
                        </button>


                        <div class="wc-title">

                            <span>
                                👀
                            </span>

                            <div>

                                <h2>
                                    What Changed?
                                </h2>

                                <small>
                                    ${getDifficultyName()}
                                </small>

                            </div>

                        </div>

                    </div>


                    <!-- PROGRESS -->

                    <div class="wc-progress-area">

                        <div class="wc-progress-info">

                            <span>
                                Challenge
                                ${currentQuestion + 1}
                                / ${questions.length}
                            </span>

                            <strong>
                                Score: ${score}
                            </strong>

                        </div>


                        <div class="wc-progress">

                            <div
                                class="wc-progress-fill"
                                style="
                                    width:
                                    ${
                                        (
                                            (currentQuestion)
                                            /
                                            questions.length
                                        ) * 100
                                    }%;
                                "
                            ></div>

                        </div>

                    </div>


                    <!-- INSTRUCTION -->

                    <div class="wc-instruction">

                        <span>🧠</span>

                        <div>

                            <strong>
                                Dhyan se dekho!
                            </strong>

                            <p>
                                Dono lists mein kya change hua?
                            </p>

                        </div>

                    </div>


                    <!-- BEFORE -->

                    <div class="wc-memory-card">

                        <div class="wc-card-title">

                            <span>
                                👁️ Before
                            </span>

                        </div>


                        <div class="wc-items">

                            ${createItems(
                                question.before
                            )}

                        </div>

                    </div>


                    <!-- AFTER -->

                    <div
                        id="wcAfterCard"
                        class="wc-memory-card wc-after-card hidden"
                    >

                        <div class="wc-card-title">

                            <span>
                                🔄 After
                            </span>

                        </div>


                        <div class="wc-items">

                            ${createItems(
                                question.after
                            )}

                        </div>

                    </div>


                    <!-- SHOW BUTTON -->

                    <button
                        id="showChange"
                        class="wc-show-btn"
                    >
                        👀 Show Change
                    </button>


                    <!-- OPTIONS -->

                    <div
                        id="whatChangedOptions"
                        class="wc-options hidden"
                    >

                    </div>


                    <!-- RESULT MESSAGE -->

                    <div
                        id="wcAnswerMessage"
                        class="wc-answer-message hidden"
                    >
                    </div>


                    <!-- NEXT -->

                    <button
                        id="whatChangedNext"
                        class="wc-next-btn hidden"
                    >
                        Next Challenge ➡️
                    </button>

                </div>

            </div>

        `;


        // ========================================
        // BACK BUTTON
        // ========================================

        document
            .getElementById("wcBack")
            .onclick = () => {

                showLevelScreen();
            };


        // ========================================
        // SHOW CHANGE
        // ========================================

        document
            .getElementById("showChange")
            .onclick = () => {

                const afterCard =
                    document.getElementById(
                        "wcAfterCard"
                    );

                const options =
                    document.getElementById(
                        "whatChangedOptions"
                    );


                afterCard.classList.remove(
                    "hidden"
                );

                document
                    .getElementById(
                        "showChange"
                    )
                    .classList.add(
                        "hidden"
                    );


                options.classList.remove(
                    "hidden"
                );


                showOptions();
            };


        // ========================================
        // SHOW OPTIONS
        // ========================================

        function showOptions() {

            const container =
                document.getElementById(
                    "whatChangedOptions"
                );


            container.innerHTML = "";


            question.before.forEach(
                (item, index) => {

                    const button =
                        document.createElement(
                            "button"
                        );


                    button.className =
                        "wc-option-btn";


                    button.innerHTML = `

                        <span class="wc-option-number">
                            ${index + 1}
                        </span>

                        <span>
                            ${item}
                        </span>

                    `;


                    button.onclick = () => {

                        if (answered) {
                            return;
                        }


                        answered = true;


                        const all =
                            container.querySelectorAll(
                                ".wc-option-btn"
                            );


                        all.forEach(btn => {
                            btn.disabled = true;
                        });


                        const answerIndex =
                            question.answer - 1;


                        if (
                            index === answerIndex
                        ) {

                            button.classList.add(
                                "correct"
                            );


                            score++;


                            showAnswerMessage(
                                "🎉 Correct!",
                                "Bilkul sahi! Change pakad liya.",
                                true
                            );

                        }

                        else {

                            button.classList.add(
                                "wrong"
                            );


                            if (
                                all[answerIndex]
                            ) {

                                all[
                                    answerIndex
                                ].classList.add(
                                    "correct"
                                );
                            }


                            showAnswerMessage(
                                "❌ Wrong!",
                                `Sahi answer ${question.answer} tha.`,
                                false
                            );
                        }


                        document
                            .getElementById(
                                "whatChangedNext"
                            )
                            .classList.remove(
                                "hidden"
                            );
                    };


                    container.appendChild(
                        button
                    );

                }
            );
        }


        // ========================================
        // ANSWER MESSAGE
        // ========================================

        function showAnswerMessage(
            title,
            text,
            correct
        ) {

            const message =
                document.getElementById(
                    "wcAnswerMessage"
                );


            message.classList.remove(
                "hidden"
            );


            message.className =
                "wc-answer-message " +
                (
                    correct
                        ? "correct-message"
                        : "wrong-message"
                );


            message.innerHTML = `

                <strong>
                    ${title}
                </strong>

                <span>
                    ${text}
                </span>

            `;
        }


        // ========================================
        // NEXT QUESTION
        // ========================================

        document
            .getElementById(
                "whatChangedNext"
            )
            .onclick = () => {

                if (!answered) {
                    return;
                }


                currentQuestion++;

                answered = false;

                render();
            };

    }


    // ============================================
    // LEVEL SCREEN
    // ============================================

    function showLevelScreen() {

        gameContent.innerHTML = `

            <div class="wc-wrapper">

                <div class="wc-level-card">

                    <div class="wc-level-icon">
                        👀
                    </div>


                    <h1>
                        What Changed?
                    </h1>


                    <p>
                        Difficulty choose karo
                    </p>


                    <div class="wc-level-options">


                        <button
                            class="wc-level-btn easy"
                            data-level="easy"
                        >

                            <span>
                                🟢
                            </span>

                            <div>

                                <strong>
                                    Easy
                                </strong>

                                <small>
                                    5 items
                                </small>

                            </div>

                            <b>
                                ›
                            </b>

                        </button>


                        <button
                            class="wc-level-btn medium"
                            data-level="medium"
                        >

                            <span>
                                🟡
                            </span>

                            <div>

                                <strong>
                                    Medium
                                </strong>

                                <small>
                                    6 items
                                </small>

                            </div>

                            <b>
                                ›
                            </b>

                        </button>


                        <button
                            class="wc-level-btn hard"
                            data-level="hard"
                        >

                            <span>
                                🔴
                            </span>

                            <div>

                                <strong>
                                    Hard
                                </strong>

                                <small>
                                    7 items
                                </small>

                            </div>

                            <b>
                                ›
                            </b>

                        </button>


                    </div>

                </div>

            </div>

        `;


        document
            .querySelectorAll(
                ".wc-level-btn"
            )
            .forEach(button => {

                button.onclick = () => {

                    difficulty =
                        button.dataset.level;

                    currentQuestion = 0;

                    score = 0;

                    answered = false;

                    render();
                };

            });
    }


    // ============================================
    // DIFFICULTY NAME
    // ============================================

    function getDifficultyName() {

        if (difficulty === "easy") {
            return "🟢 Easy";
        }

        if (difficulty === "medium") {
            return "🟡 Medium";
        }

        return "🔴 Hard";
    }


    // ============================================
    // CREATE ITEMS
    // ============================================

    function createItems(items) {

        return items
            .map((item, index) => {

                return `

                    <div class="wc-item">

                        <span class="wc-item-number">
                            ${index + 1}
                        </span>

                        <span>
                            ${item}
                        </span>

                    </div>

                `;

            })
            .join("");
    }


    // ============================================
    // START
    // ============================================

    showLevelScreen();
}
