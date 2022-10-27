import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Observable, Subscription } from "rxjs";

const ROCKET_INFORMATIONS = gql`
  query Query($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;

type ContactFormInput = {
  name: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
};

type ShopFormInput = {
  name: string;
  company: string;
  email: string;
  telephone?: string;
  specifications: string;
};

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private apollo: Apollo) {}

  getGreeting(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query HelloWorld {
          hello
        }
      `,
    }).valueChanges;
  }

  postContactForm(contactFormInput: ContactFormInput, token: string): Observable<any> {
    console.log("calling mutation");
    return this.apollo.mutate({
      mutation: gql`
        mutation PostContactForm($contactFormInput: ContactFormInput!, $token: String!) {
          postContactForm(contactFormInput: $contactFormInput, token: $token)
        }
      `,
      variables: {
        contactFormInput,
        token,
      },
    });
  }

  postShopForm(shopFormInput: ShopFormInput, token: string): Observable<any> {
    return this.apollo.mutate({
      mutation: gql`
        mutation PostShopForm($shopFormInput: ShopFormInput!, $token: String!) {
          postContactForm(shopFormInput: $shopFormInput, token: $token)
        }
      `,
      variables: {
        shopFormInput,
        token,
      },
    });
  }
}
