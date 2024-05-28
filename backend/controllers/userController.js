const User = require('../models/User');
const UserReport = require('../models/UserReport');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({
      username,
      email,
      password,
    });

    await user.save();

    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'User logged in', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const plans = {
  male: {
    '18-25': {
      slim: {
        workout: `Strength Training:
        1. Bodyweight Squats (lighter weight, more reps)
        2. Push-Ups
        3. Dumbbell Lunges
        Cardiovascular Exercise: Brisk Walking or Jogging
        Cool Down: Stretching`,
        nutrition: `Breakfast: Oatmeal with berries
        Lunch: Grilled chicken with mixed greens
        Dinner: Fish with steamed vegetables`
      },
      thin: {
        workout: `Strength Training:
        1. Pull-Ups (assisted if needed)
        2. Bench Press
        3. Deadlifts
        Cardiovascular Exercise: Swimming or Cycling
        Core Exercises: Planks
        Cool Down: Stretching`,
        nutrition: `Breakfast: Greek yogurt with granola
        Lunch: Turkey sandwich on whole grain bread
        Dinner: Pasta with lean ground turkey`
      },
      fat: {
        workout: `Strength Training:
        1. Bodyweight Squats (modified to reduce strain)
        2. Push-Ups (modified)
        3. Rowing machine workouts
        Cardiovascular Exercise: Walking or low-intensity cycling
        Flexibility and Mobility: Yoga or gentle stretching`,
        nutrition: `Breakfast: Scrambled eggs with spinach
        Lunch: Salad with grilled chicken
        Dinner: Baked salmon with a side of roasted vegetables`
      }
    },
    '26-35': {
      slim: {
        workout: `Strength Training:
        1. Barbell Squats
        2. Overhead Press
        3. Dumbbell Rows
        Cardiovascular Exercise: Running
        Cool Down: Stretching`,
        nutrition: `Breakfast: Protein smoothie with banana and almond milk
        Lunch: Quinoa salad with chickpeas
        Dinner: Grilled chicken breast with sweet potatoes`
      },
      thin: {
        workout: `Strength Training:
        1. Pull-Ups
        2. Bench Press
        3. Leg Press
        Cardiovascular Exercise: High-intensity interval training (HIIT)
        Cool Down: Stretching`,
        nutrition: `Breakfast: Eggs and toast
        Lunch: Lean beef with rice
        Dinner: Tofu stir-fry with vegetables`
      },
      fat: {
        workout: `Strength Training:
        1. Water aerobics
        2. Stationary bike
        3. Light resistance training
        Cardiovascular Exercise: Elliptical trainer
        Flexibility and Mobility: Pilates`,
        nutrition: `Breakfast: Smoothie with spinach, protein powder, and a banana
        Lunch: Vegetable soup with whole grain bread
        Dinner: Grilled fish with a salad`
      }
    },
    '35+': {
      slim: {
        workout: `Strength Training:
        1. Light Dumbbell Shoulder Press
        2. Walking Lunges
        3. Cable Rows
        Cardiovascular Exercise: Brisk Walking
        Flexibility and Mobility: Stretching and Flexibility Exercises`,
        nutrition: `Breakfast: Cottage cheese with pineapple
        Lunch: Baked chicken with broccoli
        Dinner: Stir-fried tofu with vegetables`
      },
      thin: {
        workout: `Strength Training:
        1. Machine workouts focusing on legs and arms
        2. Light Deadlifts
        3. Assisted Pull-Ups
        Cardiovascular Exercise: Light jogging or swimming
        Cool Down: Deep Stretching`,
        nutrition: `Breakfast: Porridge with fruits
        Lunch: Fish tacos with cabbage slaw
        Dinner: Vegetable lasagna`
      },
      fat: {
        workout: `Strength Training:
        1. Chair exercises
        2. Light weight training with dumbbells
        3. Gentle yoga
        Cardiovascular Exercise: Slow-paced walking
        Cool Down: Stretching and Breathing Exercises`,
        nutrition: `Breakfast: Greek yogurt with berries
        Lunch: Turkey wrap with avocado
        Dinner: Grilled salmon with quinoa and steamed asparagus`
      }
    }
  },
  female: {
    '18-25': {
      slim: {
        workout: `Strength Training:
        1. Bodyweight Squats
        2. Push-Ups
        3. Pilates
        Cardiovascular Exercise: Jogging
        Cool Down: Stretching and Yoga`,
        nutrition: `Breakfast: Greek yogurt with honey and mixed nuts
        Lunch: Spinach salad with avocado, bell peppers, and grilled salmon
        Dinner: Quinoa and black bean stuffed peppers`
      },
      thin: {
        workout: `Strength Training:
        1. Assisted Pull-Ups
        2. Light Dumbbell Press
        3. Cycling on stationary bike
        Cardiovascular Exercise: High-intensity interval training (HIIT)
        Cool Down: Foam rolling and stretching`,
        nutrition: `Breakfast: Smoothie with kale, berries, and whey protein
        Lunch: Chicken breast with wild rice and steamed broccoli
        Dinner: Turkey chili with a variety of beans`
      },
      fat: {
        workout: `Strength Training:
        1. Water aerobics
        2. Gentle stretching
        3. Light weight lifting using machines
        Cardiovascular Exercise: Slow-paced walking
        Flexibility and Mobility: Gentle yoga`,
        nutrition: `Breakfast: Oatmeal with apple slices and cinnamon
        Lunch: Grilled chicken wrap with lots of greens and vinaigrette
        Dinner: Baked cod with sweet potato mash and green beans`
      }
    },
    '26-35': {
      slim: {
        workout: `Strength Training:
        1. Kettlebell Swings
        2. TRX Rows
        3. Jump Rope
        Cardiovascular Exercise: Spinning Classes
        Cool Down: Pilates`,
        nutrition: `Breakfast: Avocado toast with poached eggs
        Lunch: Turkey breast wraps with low-fat mayo and salad
        Dinner: Grilled shrimp with garlic asparagus and couscous`
      },
      thin: {
        workout: `Strength Training:
        1. Barbell Deadlifts
        2. Overhead Dumbbell Press
        3. Stair Climber Machine
        Cardiovascular Exercise: Rowing
        Cool Down: Dynamic Stretching`,
        nutrition: `Breakfast: Cottage cheese with fresh peaches
        Lunch: Beef steak with sweet potato fries and side salad
        Dinner: Pasta primavera with chicken and a mix of vegetables`
      },
      fat: {
        workout: `Strength Training:
        1. Seated Leg Press
        2. Bench Dips
        3. Elliptical Training
        Cardiovascular Exercise: Aquafit Classes
        Cool Down: Yoga`,
        nutrition: `Breakfast: Berry protein shake with oatmeal
        Lunch: Caesar salad with grilled chicken strips
        Dinner: Salmon fillet with steamed broccoli and quinoa`
      }
    },
    '35+': {
      slim: {
        workout: `Strength Training:
        1. Resistance Band Workouts
        2. Balance Exercises
        3. Low-impact Aerobics
        Cardiovascular Exercise: Power Walking
        Cool Down: Yoga and Meditation`,
        nutrition: `Breakfast: Almond butter on whole grain toast with a banana
        Lunch: Baked tilapia with lemon, steamed zucchini, and wild rice
        Dinner: Turkey meatballs with spaghetti squash and marinara sauce`
      },
      thin: {
        workout: `Strength Training:
        1. Pilates Reformer Exercises
        2. High-Step Classes
        3. Recumbent Bike
        Cardiovascular Exercise: Light Jogging
        Cool Down: Tai Chi`,
        nutrition: `Breakfast: Chia seed pudding with mango
        Lunch: Grilled halloumi salad with a citrus vinaigrette
        Dinner: Roast chicken with Brussels sprouts and a sweet potato`
      },
      fat: {
        workout: `Strength Training:
        1. Gentle Yoga
        2. Chair Aerobics
        3. Hand Cycling
        Cardiovascular Exercise: Walking on Treadmill
        Cool Down: Deep Breathing Exercises`,
        nutrition: `Breakfast: Poached eggs with spinach and whole wheat toast
        Lunch: Quinoa salad with cucumbers, tomatoes, feta cheese, and olives
        Dinner: Grilled vegetable kebabs with tofu and a side of couscous`
      }
    }
  }
};

const questionnaire = async (req, res) => {
  try {
    const { userEmail, gender, age, bodyType, height, weight, goal, activityLevel } = req.body;

    if (!userEmail || !gender || !age || !bodyType) {
      return res.status(400).send('User email, gender, age, and body type are required');
    }

    const ageGroup = determineAgeGroup(age);
    const bodyTypePlans = plans[gender]?.[ageGroup]?.[bodyType];
    // console.log(gender)
    // console.log(ageGroup)
    // console.log(bodyType)
    if (!bodyTypePlans) {
      return res.status(401).send('Plan not found for the specified criteria');
    }

    const newUserPlan = new UserReport({
      userEmail,
      gender,
      age,
      bodyType,
      height,
      weight,
      goal,
      activityLevel,
      plan: bodyTypePlans 
    });

    await newUserPlan.save();

    res.status(201).json({
      message: 'User plan saved successfully',
      plan: newUserPlan.plan
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserPlans = async (req, res) => {
  const { email } = req.params;

    if (!email) {
        return res.status(400).json({ message: "Email parameter is required" });
    }

    try {
        const plans = await UserReport.find({ userEmail: email });

        if (plans.length === 0) {
            return res.status(404).json({ message: "No plans found for this user" });
        }

        res.json(plans);
    } catch (error) {
        console.error("Failed to retrieve user plans:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


function determineAgeGroup(age) {
  if (age <= 25) return '18-25';
  if (age <= 35) return '26-35';
  return '35+';
}

module.exports = { registerUser, loginUser, questionnaire, getUserPlans };
