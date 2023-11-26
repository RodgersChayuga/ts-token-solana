import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { keypairIdentity } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { userKeypair } from "./helpers";

const umi = createUmi("https://api.devnet.solana.com");

const keypair = umi.eddsa.createKeypairFromSecretKey(userKeypair.secretKey);

umi.use(keypairIdentity(keypair)).use(mplTokenMetadata());

// createFungible(umi, {
//   mint,
//   authority: umi.identity,
//   name: metadata.name,
//   symbol: metadata.symbol,
//   uri: metadata.uri,
//   sellerFeeBasisPoints: percentAmount(0),
//   decimals: 9,
// }).sendAndConfirm(umi);
