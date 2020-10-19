# my-riding-data
My Riding (No SQL) - Mongo DB

# mongoDB 설정

### mongoDB bash Set-up
- 환경 변수 설정
  ```bash
  export MONGO_PATH=/usr/local/mongodb
  export PATH=$PATH:$MONGO_PATH/bin
  alias runMongo="mongod --dbpath ~/dev/project/my-riding/my-riding-data/db --logpath ~/dev/project/my-riding/my-riding-data/log/mongo.log"
  ```

### Create mongoDB user : `db.createUser`
- 관리자 계정 설정
  ```bash
  > use admin
  > db.createUser({ user: "이름", pwd: "비밀번호", roles: ['root']})
  ```

- `/usr/local/mongodb/mongod.conf` 설정
  ```bash
  security:
    authoriztion: enabled
  ```

- 관리자 계정 접속
  ```bash
  $ mongo admin -u [이름] -p [비밀번호]
  ```

# 데이터베이스 및 컬렉션 생성하기

### 데이터베이스 생성
- `> use [데이터베이스명]`
### 데이터베이스 목록
- `> show dbs`
- 데이터를 최소 한 개 이상 넣어야 목록에 표시
### 현재 사용중인 데이터베이스
- `> db`
- 다큐먼트를 넣는 순간 컬렉션도 자동으로 생성

### 컬렉션 생성 및 목록 조회
```bash
> db.createCollection("users")
> db.createCollection("comments")
 show collections
```

# CRUD 작업하기

### Create(생성)
- 자바스크립트 객체(Date, 정규표현식 등)
- Binary Data, ObjectId, Int, Long, Deciaml, Timestamp, JavaScript 등
- Undefined 와 Symbol 은 몽고디비에서 자료형으로 미사용
- ObjectId(MySQL 에서 기본키로 쓰이는 값과 유사), Binary Data, Timestamp 외에는 잘 사용되지 않음
- `db.컬렉션명.save(다큐먼트)`
  1. user 생성
    ```bash
    $ mongo
    > use nodejs;
    > db.users.save({
      name: "zero",
      age: 24,
      married: false,
      comment: "안녕하세요. 간단히 몽고 디비 사용방법에 대해 알아봅시다.",
      createdAt: new Dat()
    });
    > db.users.save({
      name: "nero",
      age: 32,
      married: true,
      comment: "안녕하세요. zero 친구 nero 입니다.",
      createdAt: new Dat()
    });
    ```
  2. comments 생성
    ```bash
    > db.user.find({ name: "zero" }, { _id: 1 })
    > db.comments.save({
      commenter: ObjectId('...'),
      comment: "안녕하세요. zero의 댓글입니다.",
      createdAt: new Date()
    });
    ```

### Read(조회)
- 컬렉션 내의 모든 다큐먼트를 조회
  ```bash
  > db.users.find({})
  > db.comments.find({})
  ```
- find 메서드의 두 번째 인자로 조회할 필드를 기입
  
  (1 또는 true 로 표시한 필드, _id 는 기본적으로 가져오게 되어있으므로 0 또는 false)
  ```bash
  > db.user.find({}, {_id: 0, name: 1, married: 1})
  ```
- 첫 번째 인자 객체에 조회 조건($gt, gte, $lt, $lte, $ne, $or, $in)을 기입
  ```bash
  > db.users.find({
    age: { $gt: 30 },
    married: true
  }, { _id: 0, name: 1, age: 1 });

  > 
  > db.users.find({
    $or: [
      { age: { $gt: 30 } },
      { married: false },
    ]
  }, { _id: 0, name: 1, age: 1 });
  ```
- 정렬(sort) : 내림차순 1 / 오름차순 -1
  ```bash
  > db.user.find({}, { _id: 0, name: 1, age: 1 }).sort({ age: -1 })
  ```
- 조회할 다큐먼트 개수를 설정(limit)
  ```bash
  > db.user.find({}, { _id: 0, name: 1, age: 1 }).sort({ age: -1 }).limit(1)
  ```
- 다큐먼트 개수 설정 + 몇 개를 건너뛸지 설정(skip)
  ```bash
  > db.user.find({}, { _id: 0, name: 1, age: 1 }).sort({ age: -1 }).limit(1).skip(1)
  ```

### Update(수정)
- 첫 번째 객체 : 수정할 다큐먼트를 지정 / 두 번째 객체 : 수정할 내용을 입력하는 객체
- $set 을 사용해 수정할 필드를 지정, 미 사용 시, 다큐먼트가 통째로 두 번째 객체로 수정
  ```bash
  > db.user.update(
    { name: "nero" },
    { set: { comment: "안녕하세요. 이 필드를 바꿔보겠습니다." } }
  );
  ```

### Delete(삭제)
- 삭제할 다큐먼트에 대한 정보가 담긴 객체를 첫 번째 인자로 제공
  ```bash
  db.users.remove({ name: "nero" })
  ```