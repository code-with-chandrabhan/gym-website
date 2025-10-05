import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import BasicSuccess from "./BasicsSuccess";
import PremiumSuccess from "./PremiumSuccess";
import PersonalSuccess from "./PersonalSuccess";
import GroupSuccess from "./GroupSuccess";

const API_URL = import.meta.env.VITE_API_URL || "https://gym-backend-2-61kx.onrender.com";

export default function PlanSuccess({
  setToken,
  token,
}: {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  token: string | null;
}) {
  const { plan } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentVerified, setPaymentVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const session_id = query.get("session_id");
    const userId = localStorage.getItem("userId");
    const planName = query.get("planName");
    const duration = query.get("duration");
    const amount = query.get("amount");

    if (!session_id || !userId || !planName || !duration || !amount) {
      navigate("/pricing");
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await fetch(`${API_URL}/payment/verify-payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id,
            userId,
            planName,
            duration: Number(duration),
            amount: Number(amount),
          }),
        });

        const data = await res.json();

        if (data.success) {
          sessionStorage.setItem("paymentVerified", "true");
          setPaymentVerified(true);

          // ✅ Trigger Navbar/Profile refresh
          if (token) {
            setToken(token); // re-fetch profile
          }
        } else {
          setPaymentVerified(false);
          navigate("/pricing");
        }
      } catch (err) {
        console.error("⚠ Payment verify error:", err);
        setPaymentVerified(false);
        navigate("/pricing");
      }
    };

    verifyPayment();
  }, [location, navigate, setToken, token]);

  if (paymentVerified === null) {
    return <div className="p-8 text-center">Verifying Payment...</div>;
  }

  if (!paymentVerified) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold text-red-600">Payment Failed ❌</h1>
        <p>Please complete the payment to access this plan.</p>
      </div>
    );
  }

  switch (plan?.toLowerCase()) {
    case "basic":
      return <BasicSuccess />;
    case "premium":
      return <PremiumSuccess />;
    case "personal":
      return <PersonalSuccess />;
    case "group":
      return <GroupSuccess />;
    default:
      return (
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-green-600">
            Payment Successful ✅
          </h1>
          <p className="mt-4 text-lg">Welcome to your {plan} plan!</p>
        </div>
      );
  }
}
