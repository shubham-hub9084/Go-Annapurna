// Street Food
import paniPuriImg from "./pani_puri.jpg";
import vadaPavImg from "./vada_pav.jpg";
import bhelPuriImg from "./bhel_puri.jpg";
import choleBhatureImg from "./chole_bhature.jpg";
import dosaImg from "./dosa.jpg";
import pavBhajiImg from "./pav_bhaji.jpg";
import misalPavImg from "./misal_pav.jpg";
import kathiRollImg from "./kathi_roll.jpg";

// Appetizers
import samosaImg from "./samosa.jpg";
import paneerTikkaImg from "./paneer_tikka.jpg";
import dahiBhallaImg from "./dahi_bhalla.jpg";
import chickenKebabsImg from "./chicken_kebabs.jpg";
import onionBhajiImg from "./onion_bhaji.jpg";

// Main Courses
import dalMakhaniImg from "./dal_makhani.jpg";
import palakPaneerImg from "./palak_paneer.jpg";
import chickenTikkaMasalaImg from "./chicken_tikka_masala.jpg";
import muttonRoganJoshImg from "./mutton_rogan_josh.jpg";
import vegetableBiryaniImg from "./vegetable_biryani.jpg";
import butterChickenImg from "./butter_chicken.jpg";
import chickenBiryaniImg from "./chicken_biryani.jpg";
import tandooriPlatterImg from "./tandoori_platter.jpg";

// Desserts
import gulabJamunImg from "./gulab_jamun.jpg";
import rasmalaiImg from "./rasmalai.jpg";
import gajarKaHalwaImg from "./gajar_ka_halwa.jpg";
import kulfiImg from "./kulfi.jpg";
import jalebiImg from "./jalebi.jpg";

// Beverages
import masalaChaiImg from "./masala_chai.jpg";
import mangoLassiImg from "./mango_lassi.jpg";
import freshLimeSodaImg from "./fresh_lime_soda.jpg";
import traditionalButtermilkImg from "./traditional_buttermilk.jpg";
import indianCoffeeImg from "./indian_coffee.jpg";
import alooTikkiImg from "./aloo_tikki.png";
import fishCurryImg from "./fish_curry.png";
import chicken65Img from "./chicken_65.png";
import malaiKoftaImg from "./malai_kofta.png";
import masalaDosaImg from "./masala_dosa.png";
import paneerTikkaNewImg from "./paneer_tikka_new.png";
import butterChickenNewImg from "./butter_chicken_new.png";
import choleBhatureNewImg from "./chole_bhature_new.png";
import vadaPavNewImg from "./vada_pav_new.png";
import gulabJamunNewImg from "./gulab_jamun_new.png";

// Cakes (Using direct URLs for simplicity as I can't upload files, but usually would import. I'll use placeholders that resolve to Unsplash for now, or assume the user will replace them. Actually, I can use Unsplash URLs directly in the object if I don't import them. But to follow pattern, I will use consts with Unsplash URLs).
const chocolateTruffleCakeImg = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80";
const redVelvetCakeImg = "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=800&q=80";
const blackForestCakeImg = "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80";
const blueberryCheesecakeImg = "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80";
const pineappleCakeImg = "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80";
const strawberryShortcakeImg = "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80";
const kitkatCakeImg = "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const fruitCakeImg = "https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const tiramisuCakeImg = "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80";
const coffeeWalnutImg = "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=80";
const butterscotchCakeImg = "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&q=80";
const mangoCakeImg = "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80";

export {
    paniPuriImg,
    vadaPavImg,
    bhelPuriImg,
    choleBhatureImg,
    dosaImg,
    pavBhajiImg,
    misalPavImg,
    kathiRollImg,
    samosaImg,
    paneerTikkaImg,
    dahiBhallaImg,
    chickenKebabsImg,
    onionBhajiImg,
    dalMakhaniImg,
    palakPaneerImg,
    chickenTikkaMasalaImg,
    muttonRoganJoshImg,
    vegetableBiryaniImg,
    butterChickenImg,
    chickenBiryaniImg,
    tandooriPlatterImg,
    gulabJamunImg,
    rasmalaiImg,
    gajarKaHalwaImg,
    kulfiImg,
    jalebiImg,
    masalaChaiImg,
    mangoLassiImg,
    freshLimeSodaImg,
    traditionalButtermilkImg,
    indianCoffeeImg,
    alooTikkiImg,
    fishCurryImg,
    chicken65Img,
    malaiKoftaImg,
    masalaDosaImg,
    paneerTikkaNewImg,
    butterChickenNewImg,
    choleBhatureNewImg,
    vadaPavNewImg,
    gulabJamunNewImg,
};

export const menuItems = [
    // Street Food & Fast Food
    {
        id: 24,
        name: "Pani Puri",
        description:
            "Crispy hollow puris filled with spicy mint water and potato mixture",
        price: 79,
        category: "street-food",
        dietary: "veg",
        dietary: "veg",
        image: paniPuriImg,
        variants: [
            { name: "Regular (6 pcs)", price: 0 },
            { name: "Large (10 pcs)", price: 40 }
        ],
        addons: [
            { name: "Extra Pani", price: 20 },
            { name: "Extra Masala", price: 10 }
        ]
    },
    {
        id: 25,
        name: "Vada Pav",
        description:
            "Mumbai style spicy potato patty in butter bun with chutneys",
        price: 69,
        category: "street-food",
        dietary: "veg",
        dietary: "veg",
        image: vadaPavNewImg,
        variants: [
            { name: "Regular", price: 0 },
            { name: "Cheese Vada Pav", price: 20 },
            { name: "Schezwan Vada Pav", price: 15 }
        ],
        addons: [
            { name: "Fried Chilli", price: 5 },
            { name: "Extra Chutney", price: 10 }
        ]
    },
    {
        id: 26,
        name: "Bhel Puri",
        description:
            "Crunchy puffed rice mixed with vegetables and tangy chutneys",
        price: 89,
        category: "street-food",
        dietary: "veg",
        dietary: "veg",
        image: bhelPuriImg,
        variants: [
            { name: "Regular", price: 0 },
            { name: "Extra Spicy", price: 0 },
            { name: "Jain (No Onion/Garlic)", price: 0 }
        ],
        addons: [
            { name: "Extra Sev", price: 15 },
            { name: "Extra Papdi", price: 15 }
        ]
    },
    {
        id: 27,
        name: "Chole Bhature",
        description: "Fluffy fried bread with spicy chickpea curry",
        price: 149,
        category: "street-food",
        dietary: "veg",
        dietary: "veg",
        image: choleBhatureNewImg,
        variants: [
            { name: "2 Bhature", price: 0 },
            { name: "3 Bhature", price: 40 },
            { name: "Paneer Bhature", price: 30 }
        ],
        addons: [
            { name: "Extra Chole", price: 50 },
            { name: "Extra Bhatura", price: 40 },
            { name: "Lassi Glass", price: 60 }
        ]
    },
    {
        id: 28,
        name: "Dosa",
        description: "Crispy rice and lentil crepe with potato filling",
        price: 129,
        category: "street-food",
        dietary: "veg",
        image: masalaDosaImg,
        variants: [
            { name: "Plain", price: 0 },
            { name: "Masala", price: 30 },
            { name: "Cheese", price: 50 },
            { name: "Mysore Masala", price: 60 }
        ],
        addons: [
            { name: "Extra Chutney", price: 20 },
            { name: "Extra Sambar", price: 30 },
            { name: "Butter", price: 25 }
        ]
    },
    {
        id: 29,
        name: "Pav Bhaji",
        description: "Spiced mixed vegetable mash with buttered buns",
        price: 139,
        category: "street-food",
        dietary: "veg",
        dietary: "veg",
        image: pavBhajiImg,
        variants: [
            { name: "Regular", price: 0 },
            { name: "Cheese Pav Bhaji", price: 40 },
            { name: "Khada Pav Bhaji", price: 20 }
        ],
        addons: [
            { name: "Extra Buttery Pav (2)", price: 30 },
            { name: "Extra Bhaji", price: 60 },
            { name: "Cheese Topping", price: 30 }
        ]
    },
    {
        id: 30,
        name: "Misal Pav",
        description: "Spicy sprouted moth beans curry with bread",
        price: 119,
        category: "street-food",
        dietary: "veg",
        dietary: "veg",
        image: misalPavImg,
        variants: [
            { name: "Medium Spicy", price: 0 },
            { name: "Extra Spicy (Kolhapuri)", price: 0 }
        ],
        addons: [
            { name: "Extra Pav (2)", price: 20 },
            { name: "Extra Farsan", price: 20 },
            { name: "Curd Bowl", price: 30 }
        ]
    },
    {
        id: 31,
        name: "Kathi Roll",
        description: "Grilled flatbread wrapped with spiced fillings",
        price: 159,
        category: "street-food",
        dietary: "non-veg",
        dietary: "non-veg",
        image: kathiRollImg,
        variants: [
            { name: "Single Egg", price: 0 },
            { name: "Double Egg", price: 20 },
            { name: "Double Chicken", price: 60 }
        ],
        addons: [
            { name: "Cheese Slice", price: 20 },
            { name: "Extra Mayo", price: 15 }
        ]
    },
    // Appetizers
    {
        id: 4,
        name: "Samosa",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: 89,
        category: "appetizers",
        dietary: "veg",
        dietary: "veg",
        image: samosaImg,
        variants: [
            { name: "2 Pieces", price: 0 },
            { name: "4 Pieces", price: 80 }
        ],
        addons: [
            { name: "Extra Chutney", price: 10 },
            { name: "Pav (2)", price: 20 }
        ]
    },
    {
        id: 5,
        name: "Paneer Tikka",
        description: "Grilled cottage cheese marinated in yogurt and spices",
        price: 249,
        category: "appetizers",
        dietary: "veg",
        dietary: "veg",
        image: paneerTikkaNewImg,
        variants: [
            { name: "Half Plate (4 pcs)", price: 0 },
            { name: "Full Plate (8 pcs)", price: 240 }
        ],
        addons: [
            { name: "Mint Chutney", price: 20 },
            { name: "Roasted Papad", price: 30 }
        ]
    },
    {
        id: 6,
        name: "Dahi Bhalla",
        description:
            "Soft lentil dumplings in yogurt with sweet and tangy chutneys",
        price: 129,
        category: "appetizers",
        dietary: "veg",
        dietary: "veg",
        image: dahiBhallaImg,
        variants: [
            { name: "Regular", price: 0 },
            { name: "Extra Sweet Curd", price: 20 }
        ],
        addons: [
            { name: "Extra Papdi", price: 15 },
            { name: "Pomegranate", price: 20 }
        ]
    },
    {
        id: 7,
        name: "Chicken Kebabs",
        description: "Tender chicken pieces marinated and grilled to perfection",
        price: 299,
        category: "appetizers",
        dietary: "non-veg",
        dietary: "non-veg",
        image: chickenKebabsImg,
        variants: [
            { name: "Half Plate (4 pcs)", price: 0 },
            { name: "Full Plate (8 pcs)", price: 280 }
        ],
        addons: [
            { name: "Extra Dip", price: 20 },
            { name: "Rumali Roti", price: 40 }
        ]
    },
    {
        id: 8,
        name: "Onion Bhaji",
        description: "Golden-brown onion fritters with gram flour and spices",
        price: 149,
        category: "appetizers",
        dietary: "veg",
        dietary: "veg",
        image: onionBhajiImg,
        variants: [
            { name: "Regular", price: 0 },
            { name: "Spicy", price: 0 }
        ],
        addons: [
            { name: "Extra Chutney", price: 10 },
            { name: "Fried Chilli", price: 5 }
        ]
    },
    // Main Courses
    {
        id: 9,
        name: "Dal Makhani",
        description: "Creamy black lentils slow-cooked with butter and spices",
        price: 229,
        category: "main-courses",
        dietary: "veg",
        image: dalMakhaniImg,
        variants: [
            { name: "Half", price: 0 }, // Base price implies Half
            { name: "Full", price: 180 } // Additive or replacement? Let's assume replacement price or additive. Usually better to specify full price overrides or additive difference. 
            // Implementation choice: I'll make the logic handle "price" as the final price if selected.
            // Actually, simpler model: Base price is default. Variants override price? Or variants add to base?
            // professional apps often have "Half (150)", "Full (280)".
            // Let's stick to: if variant selected, it overrides base price OR adds to it. 
            // Let's go with: Base price is 0 in component calculation if variants exist, and variants carry the full price. 
            // OR base price + variant cost. 
            // Let's try: Item Price is base. Variant has `price` which is the Cost. 
            // Wait, standard UI: "Small ₹100", "Large ₹200". 
            // I will implement: Item has base price. Variants have `price` which *replaces* base price.
        ]
    },
    {
        id: 10,
        name: "Palak Paneer",
        description: "Cottage cheese cubes in creamy spinach curry",
        price: 269,
        category: "main-courses",
        dietary: "veg",
        dietary: "veg",
        image: palakPaneerImg,
        variants: [
            { name: "Half", price: 0 },
            { name: "Full", price: 230 }
        ],
        addons: [
            { name: "Butter Naan", price: 40 },
            { name: "Jeera Rice", price: 120 }
        ]
    },
    {
        id: 11,
        name: "Chicken Tikka Masala",
        description: "Grilled chicken in rich tomato-based creamy curry",
        price: 349,
        category: "main-courses",
        dietary: "non-veg",
        dietary: "non-veg",
        image: chickenTikkaMasalaImg,
        variants: [
            { name: "Half", price: 0 },
            { name: "Full", price: 300 }
        ],
        addons: [
            { name: "Garlic Naan", price: 50 },
            { name: "Extra Gravy", price: 80 }
        ]
    },
    {
        id: 12,
        name: "Mutton Rogan Josh",
        description: "Kashmiri-style mutton curry with aromatic spices",
        price: 449,
        category: "main-courses",
        dietary: "non-veg",
        dietary: "non-veg",
        image: muttonRoganJoshImg,
        variants: [
            { name: "Half", price: 0 },
            { name: "Full", price: 400 }
        ],
        addons: [
            { name: "Tandoori Roti", price: 30 },
            { name: "Steamed Rice", price: 100 }
        ]
    },
    {
        id: 13,
        name: "Vegetable Biryani",
        description: "Aromatic basmati rice with mixed vegetables and spices",
        price: 279,
        category: "main-courses",
        dietary: "veg",
        dietary: "veg",
        image: vegetableBiryaniImg,
        variants: [
            { name: "Regular", price: 0 },
            { name: "Large (Family Pack)", price: 250 }
        ],
        addons: [
            { name: "Extra Raita", price: 20 },
            { name: "Fryums", price: 10 }
        ]
    },
    // Desserts
    {
        id: 14,
        name: "Gulab Jamun",
        description: "Soft milk dumplings in sweet cardamom syrup",
        price: 129,
        category: "desserts",
        dietary: "veg",
        dietary: "veg",
        image: gulabJamunNewImg,
        variants: [
            { name: "2 Pieces", price: 0 },
            { name: "4 Pieces", price: 110 }
        ],
        addons: [
            { name: "Vanilla Ice Cream", price: 40 },
            { name: "Rabdi", price: 50 }
        ]
    },
    {
        id: 15,
        name: "Rasmalai",
        description: "Soft cottage cheese dumplings in saffron milk",
        price: 149,
        category: "desserts",
        dietary: "veg",
        dietary: "veg",
        image: rasmalaiImg,
        variants: [
            { name: "2 Pieces", price: 0 },
            { name: "4 Pieces", price: 130 }
        ],
        addons: [
            { name: "Extra Saffron Milk", price: 30 },
            { name: "Dry Fruit Garnish", price: 20 }
        ]
    },
    {
        id: 16,
        name: "Gajar Ka Halwa",
        description: "Traditional carrot dessert with milk and dry fruits",
        price: 139,
        category: "desserts",
        dietary: "veg",
        dietary: "veg",
        image: gajarKaHalwaImg,
        variants: [
            { name: "200g", price: 0 },
            { name: "500g", price: 300 }
        ],
        addons: [
            { name: "Extra Khoya", price: 30 },
            { name: "Cashews", price: 20 }
        ]
    },
    {
        id: 17,
        name: "Kulfi",
        description: "Traditional Indian ice cream with cardamom and pistachios",
        price: 99,
        category: "desserts",
        dietary: "veg",
        dietary: "veg",
        image: kulfiImg,
        variants: [
            { name: "Malai Kulfi", price: 0 },
            { name: "Pista Kulfi", price: 20 },
            { name: "Kesar Kulfi", price: 30 }
        ],
        addons: [
            { name: "Falooda", price: 30 },
            { name: "Rose Syrup", price: 10 }
        ]
    },
    {
        id: 18,
        name: "Jalebi",
        description: "Crispy sweet spirals soaked in sugar syrup",
        price: 119,
        category: "desserts",
        dietary: "veg",
        dietary: "veg",
        image: jalebiImg,
        variants: [
            { name: "100g", price: 0 },
            { name: "250g", price: 150 }
        ],
        addons: [
            { name: "Rabdi", price: 50 },
            { name: "Hot Milk", price: 40 }
        ]
    },
    // Beverages
    {
        id: 19,
        name: "Masala Chai",
        description: "Traditional spiced tea with cardamom and ginger",
        price: 49,
        category: "beverages",
        dietary: "veg",
        dietary: "veg",
        image: masalaChaiImg,
        variants: [
            { name: "Regular Cup", price: 0 },
            { name: "Cutting Chai (2)", price: 30 },
            { name: "Kullad Chai", price: 20 }
        ],
        addons: [
            { name: "Bun Maska", price: 40 },
            { name: "Biscuits", price: 10 }
        ]
    },
    {
        id: 20,
        name: "Mango Lassi",
        description: "Creamy yogurt smoothie with fresh mango pulp",
        price: 89,
        category: "beverages",
        dietary: "veg",
        dietary: "veg",
        image: mangoLassiImg,
        variants: [
            { name: "Regular Glass", price: 0 },
            { name: "Large Glass", price: 50 }
        ],
        addons: [
            { name: "Ice Cream Scoop", price: 40 },
            { name: "Dry Fruits", price: 30 }
        ]
    },
    {
        id: 21,
        name: "Fresh Lime Soda",
        description: "Refreshing lime drink with mint and soda water",
        price: 69,
        category: "beverages",
        dietary: "veg",
        dietary: "veg",
        image: freshLimeSodaImg,
        variants: [
            { name: "Sweet", price: 0 },
            { name: "Salted", price: 0 },
            { name: "Mixed", price: 10 }
        ],
        addons: [
            { name: "Extra Mint", price: 10 },
            { name: "Jeera Masala", price: 10 }
        ]
    },
    {
        id: 22,
        name: "Traditional Buttermilk",
        description: "Spiced yogurt drink with cumin and mint",
        price: 59,
        category: "beverages",
        dietary: "veg",
        dietary: "veg",
        image: traditionalButtermilkImg,
        variants: [
            { name: "Regular", price: 0 },
            { name: "Masala Chaas", price: 10 }
        ],
        addons: [
            { name: "Roasted Jeera", price: 5 },
            { name: "Boondi", price: 10 }
        ]
    },
    {
        id: 23,
        name: "Indian Coffee",
        description: "Strong filter coffee with milk and sugar",
        price: 79,
        category: "beverages",
        dietary: "veg",
        dietary: "veg",
        image: indianCoffeeImg,
        variants: [
            { name: "Regular", price: 0 },
            { name: "Strong", price: 10 }
        ],
        addons: [
            { name: "Extra Milk", price: 10 },
            { name: "Hazelnuts", price: 30 }
        ]
    },
    {
        id: 32,
        name: "Aloo Tikki",
        description: "Crispy fried potato patties served with tangy chutneys",
        price: 99,
        category: "street-food",
        dietary: "veg",
        dietary: "veg",
        image: alooTikkiImg,
        variants: [
            { name: "2 Tikkis", price: 0 },
            { name: "Chaature Style", price: 30 }
        ],
        addons: [
            { name: "Dahi", price: 20 },
            { name: "Sev", price: 10 }
        ]
    },
    {
        id: 33,
        name: "Fish Curry",
        description: "Spicy and tangy fish curry cooked with traditional spices",
        price: 399,
        category: "main-courses",
        dietary: "non-veg",
        dietary: "non-veg",
        image: fishCurryImg,
        variants: [
            { name: "Half", price: 0 },
            { name: "Full", price: 350 }
        ],
        addons: [
            { name: "Steamed Rice", price: 80 },
            { name: "Rotion", price: 30 }
        ]
    },
    {
        id: 34,
        name: "Chicken 65",
        description: "Spicy, deep-fried chicken appetizer from South India",
        price: 249,
        category: "appetizers",
        dietary: "non-veg",
        dietary: "non-veg",
        image: chicken65Img,
        variants: [
            { name: "Regular", price: 0 },
            { name: "Boneless", price: 50 }
        ],
        addons: [
            { name: "Extra Lemon", price: 0 },
            { name: "Fried Chilli", price: 5 }
        ]
    },
    {
        id: 35,
        name: "Malai Kofta",
        description: "Fried dumpling balls in a creamy, savory and slightly sweet gravy",
        price: 289,
        category: "main-courses",
        dietary: "veg",
        dietary: "veg",
        image: malaiKoftaImg,
        variants: [
            { name: "Half", price: 0 },
            { name: "Full", price: 250 }
        ],
        addons: [
            { name: "Butter Naan", price: 40 },
            { name: "Jeera Rice", price: 120 }
        ]
    },
    {
        id: 36,
        name: "Butter Chicken",
        description: "Tender chicken cooked in a rich, creamy tomato and butter gravy",
        price: 329,
        category: "main-courses",
        dietary: "non-veg",
        image: butterChickenNewImg,
        variants: [
            { name: "Half", price: 0 },
            { name: "Full", price: 290 }
        ],
        addons: [
            { name: "Butter Naan", price: 40 },
            { name: "Jeera Rice", price: 120 }
        ]
    },
    // Cakes
    {
        id: 37,
        name: "Chocolate Truffle Cake",
        description: "Decadent chocolate sponge layered with rich chocolate ganache",
        price: 599,
        category: "cakes",
        dietary: "veg",
        image: chocolateTruffleCakeImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 500 }
        ],
        addons: [
            { name: "Birthday Candle", price: 10 },
            { name: "Edible Gold Dust", price: 50 }
        ]
    },
    {
        id: 38,
        name: "Red Velvet Cake",
        description: "Classic red velvet sponge with smooth cream cheese frosting",
        price: 649,
        category: "cakes",
        dietary: "veg",
        image: redVelvetCakeImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 550 }
        ],
        addons: [
            { name: "Extra Frosting", price: 40 },
            { name: "Chocolate Message", price: 30 }
        ]
    },
    {
        id: 39,
        name: "Black Forest Cake",
        description: "Layers of chocolate sponge, whipped cream, and cherries",
        price: 549,
        category: "cakes",
        dietary: "veg",
        image: blackForestCakeImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 450 }
        ],
        addons: [
            { name: "Extra Cherries", price: 20 },
            { name: "Sparkler Candle", price: 20 }
        ]
    },
    {
        id: 40,
        name: "Blueberry Cheesecake",
        description: "Creamy cheesecake topped with fresh blueberry compote",
        price: 799,
        category: "cakes",
        dietary: "veg",
        image: blueberryCheesecakeImg,
        variants: [
            { name: "Slice", price: 0 },
            { name: "Whole Cake (500g)", price: 600 }
        ],
        addons: [
            { name: "Extra Sauce", price: 30 },
            { name: "Fresh Berries", price: 50 }
        ]
    },
    {
        id: 41,
        name: "Pineapple Cake",
        description: "Light vanilla sponge with fresh pineapple cream and chunks",
        price: 499,
        category: "cakes",
        dietary: "veg",
        image: pineappleCakeImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 400 }
        ],
        addons: [
            { name: "Extra Pineapple", price: 20 },
            { name: "Eggless", price: 0 }
        ]
    },
    {
        id: 42,
        name: "Strawberry Shortcake",
        description: "Fluffy sponge cake with fresh strawberries and whipped cream",
        price: 599,
        category: "cakes",
        dietary: "veg",
        image: strawberryShortcakeImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 500 }
        ],
        addons: [
            { name: "Chocolate Drizzle", price: 20 },
            { name: "Fresh Strawberries", price: 40 }
        ]
    },
    {
        id: 43,
        name: "KitKat Cake",
        description: "Crunchy KitKat bars surrounding a rich chocolate cake, topped with Gems.",
        price: 899,
        category: "cakes",
        dietary: "veg",
        image: kitkatCakeImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 800 }
        ],
        addons: [
            { name: "Extra KitKat", price: 100 },
            { name: "Ribbon Bow", price: 20 }
        ]
    },
    {
        id: 44,
        name: "Fresh Fruit Cake",
        description: "Vanilla cake loaded with seasonal fresh fruits and exotic glaze.",
        price: 699,
        category: "cakes",
        dietary: "veg",
        image: fruitCakeImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 600 }
        ],
        addons: [
            { name: "Extra Fruits", price: 50 },
            { name: "NutTopping", price: 40 }
        ]
    },
    {
        id: 45,
        name: "Tiramisu Cake",
        description: "Italian coffee-flavoured dessert with mascarpone cheese and cocoa.",
        price: 849,
        category: "cakes",
        dietary: "veg",
        image: tiramisuCakeImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 750 }
        ],
        addons: [
            { name: "Coffee Shot", price: 30 }
        ]
    },
    {
        id: 46,
        name: "Coffee Walnut Cake",
        description: "A perfect blend of coffee cream and crunchy walnuts.",
        price: 599,
        category: "cakes",
        dietary: "veg",
        image: coffeeWalnutImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 500 }
        ],
        addons: [
            { name: "Extra Walnuts", price: 40 }
        ]
    },
    {
        id: 47,
        name: "Butterscotch Delight",
        description: "Classic butterscotch cake with crunchy praline and caramel sauce.",
        price: 549,
        category: "cakes",
        dietary: "veg",
        image: butterscotchCakeImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 450 }
        ],
        addons: [
            { name: "Extra Caramel", price: 30 }
        ]
    },
    {
        id: 48,
        name: "Mango Mousse Cake",
        description: "Light and airy mango mousse layered with vanilla sponge.",
        price: 649,
        category: "cakes",
        dietary: "veg",
        image: mangoCakeImg,
        variants: [
            { name: "500g", price: 0 },
            { name: "1kg", price: 550 }
        ],
        addons: [
            { name: "Fresh Mango", price: 50 }
        ]
    },
];
