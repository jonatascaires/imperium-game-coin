import { toast } from 'react-toastify';

export default function Notify() {
  const notify = (message: string, alert: 'success' | 'warn' | 'error' | 'info') => {
    if (alert === 'warn') return (
      toast.warn(message, {
        theme: "dark"
      })
    )
    if (alert === 'success') return (
      toast.success(message, {
        theme: "dark"
      })
    )
    if (alert === 'error') return (
      toast.error(message, {
        theme: "dark"
      })
    )
    if (alert === 'info') return (
      toast.info(message, {
        theme: "dark"
      })
    )
  };

  return notify
}