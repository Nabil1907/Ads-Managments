export class Ads {
    _id!: String;
    title!: String;
    type!: String;
    tag!: String;
    category!: String;
    advertisor!: String;
    start_date!: String;
    end_date!: String;
    photoUrl!: String;
    description!: String;
}

export class Advertisor{
    _id!: String;
    username!: String;
    password!: String;
}

export class Tag{
    _id!: String;
    tagName!: String;
}
export class Category{
    _id!: String;
    categoryName!: String;
}