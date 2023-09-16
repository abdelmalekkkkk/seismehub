## عن المشروع

هو منصة مركزية تهدف إلى تسريع وتبسيط المساعدات لضحايا الزلزال في المغرب
مهمتنا ثنائية الهدف: تبسيط التبرعات العاجلة من خلال توجيه الجهود حيث يكون لها الأثر الأكبر، وتكوين جسر بين المتبرعين الراغبين والعاملين في الميدان. من خلال مشاركة المعلومات بدعم التكنولوجيا، نهدف إلى جعل كل مساهمة مهمة في حالات الأزمات.

## إخلاء المسؤولية

على الرغم من سعينا لتوفير بيانات دقيقة وفي الوقت المناسب، إلا أنها مستمدة من مساهمين ومتطوعين متعددين؛ لذلك، لا يمكننا ضمان اكتمالها أو موثوقيتها. تُعتبر المنصة لأغراض معلوماتية فقط. يُرجى التحقق المستقل من أي معلومات حرجة واتباع توجيهات السلطات المحلية في حالات الطوارئ. من خلال استخدام هذه المنصة، توافق على هذا الإخلاء.

## What You Need

### Backend

- **Go Programming Language**: Grab it from the [official site](https://go.dev/).
- **Pocketbase**: Download the executable and make it accessible in your PATH.

### Frontend

- **Node.js**: Download from [here](https://nodejs.org/).
- **NPM**: Comes with Node.js. Verify by running `npm -v`.
- **React.js, TypeScript, and Tailwind CSS**: These will be installed next.

## Get Started

### Step 1: Get the Code

Clone this repo to kick things off:

```bash
git clone https://github.com/yourusername/seismehub.git
```

### Step 2: Frontend Setup

Jump into the frontend directory (`website`) and install the required packages:

```bash
cd seismehub/website
npm install
```

To get the frontend running:

```bash
npm run dev
```

### Step 3: Backend Setup

Head back and get into the backend directory:

- Verify Go is installed by running `go version`.
- Download Pocketbase and add it to your PATH.

**Note**: Pocketbase has SQLite built-in, so no separate database setup is needed.

```bash
cd seismehub/backend
```

### Step 4: Migrate the Database

Set up the database with:

```bash
pocketbase migrate
```

### Step 5: Fire Up the Backend

Compile the Go code:

```bash
go build
```

Now, start the backend:

```bash
./seismehub-be serve
```

You'll know you're good when you see:

```text
Server started at http://127.0.0.1:8090
├─ REST API: http://127.0.0.1:8090/api/
└─ Admin UI: http://127.0.0.1:8090/_/
```

## 💙 Contributing

We're all ears for community contributions—whether it's a quick typo fix or an entirely new feature. You don't need to be an expert to make an impact. Here's how to contribute:

1. **Fork and Clone**: Secure a copy of the repo on your account and machine.

2. **Install Dependencies**: Follow the guidelines in `readme.md`.

3. **Create a New Branch**: Isolate your changes in a dedicated branch.

4. **Make Changes**: Roll out your code and accompanying tests.

5. **Run Linting**: Keep an eye out for code style or linting issues.

6. **Commit and Push**: Sync your changes to your online fork.

7. **Submit a Pull Request**: Initiate a PR from your fork to the main repo.

Got questions? Feel free to drop them in the issues section.
